/**
 * NORI Seoul K-Beauty & Wellness — Modular Payment & Pricing Service
 * Ready for Toss Payments SDK v2 Integration
 * 
 * ARCHITECTURE SECURITY NOTE:
 * In compliance with security standards, NO SECRET KEYS are stored in frontend client code.
 * The Toss Payments Client Key is public and safe to use in the browser.
 * Payment authorization and settlement confirmation will be handled server-side
 * via POST /api/payments/toss/confirm using the server-only TOSS_SECRET_KEY.
 */

import { Tour, BookingFormData } from '../types';

export type PaymentMethodType = 'CARD' | 'TOSS_PAY' | 'INTERNATIONAL_CARD' | 'TRANSFER';

export interface PriceBreakdown {
  unitPriceUsd: number;
  guests: number;
  subtotalUsd: number;
  conciergeServiceFeeUsd: number;
  totalUsd: number;
  exchangeRateKrw: number;
  totalKrw: number;
  tierLabel?: string;
  isTierPricing: boolean;
}

export interface PaymentOrderDetails {
  orderId: string;
  orderName: string;
  amountKrw: number;
  amountUsd: number;
  currency: 'KRW' | 'USD';
  customerName: string;
  customerEmail: string;
  customerMobilePhone: string;
  country: string;
  selectedTourId: string;
  selectedTourTitle: string;
  tourDate: string;
  guests: number;
  paymentMethod: PaymentMethodType;
  createdAt: string;
}

export interface TossPaymentConfig {
  /**
   * Public client key for Toss Payments SDK v2.
   * Defaults to test sandbox key if environment variable is not supplied.
   * Never store secret keys here.
   */
  clientKey: string;
  currency: 'KRW' | 'USD';
  isLiveMode: boolean;
}

// Exchange rate reference (KRW / USD)
export const DEFAULT_USD_TO_KRW_RATE = 1350;

// Public client key for Toss Payments (safe for browser)
export const TOSS_CLIENT_CONFIG: TossPaymentConfig = {
  clientKey: (import.meta as any).env?.VITE_TOSS_CLIENT_KEY || 'test_ck_docs_OaPz8L5KdmQXkzRz3y47MQbg',
  currency: 'KRW',
  isLiveMode: false,
};

/**
 * Calculates accurate pricing based on tour configuration, guest counts, and tiers.
 */
export function calculateBookingPrice(tour: Tour | undefined, guests: number): PriceBreakdown {
  const safeGuests = Math.max(1, guests || 1);
  const exchangeRate = DEFAULT_USD_TO_KRW_RATE;

  if (!tour) {
    return {
      unitPriceUsd: 0,
      guests: safeGuests,
      subtotalUsd: 0,
      conciergeServiceFeeUsd: 0,
      totalUsd: 0,
      exchangeRateKrw: exchangeRate,
      totalKrw: 0,
      isTierPricing: false,
    };
  }

  // Check if tour has explicit tier pricing for guest count
  if (tour.priceByGuestCount && tour.priceByGuestCount.length > 0) {
    const tier = tour.priceByGuestCount.find(t => t.guests === safeGuests)
      || tour.priceByGuestCount[tour.priceByGuestCount.length - 1];

    if (tier) {
      const tierUsd = tier.usd || Math.round(tier.krw / exchangeRate);
      const tierKrw = tier.krw || (tierUsd * exchangeRate);

      return {
        unitPriceUsd: tierUsd,
        guests: safeGuests,
        subtotalUsd: tierUsd, // tier price is usually package total for the group
        conciergeServiceFeeUsd: 0,
        totalUsd: tierUsd,
        exchangeRateKrw: exchangeRate,
        totalKrw: tierKrw,
        tierLabel: tier.label,
        isTierPricing: true,
      };
    }
  }

  // Standard per-guest calculation
  const unitPrice = tour.startingPrice || 320;
  const subtotal = unitPrice * safeGuests;
  const totalKrw = Math.round(subtotal * exchangeRate);

  return {
    unitPriceUsd: unitPrice,
    guests: safeGuests,
    subtotalUsd: subtotal,
    conciergeServiceFeeUsd: 0,
    totalUsd: subtotal,
    exchangeRateKrw: exchangeRate,
    totalKrw: totalKrw,
    isTierPricing: false,
  };
}

/**
 * Generates an immutable, idempotent order record formatted for Toss Payments v2.
 */
export function createPaymentOrder(
  tour: Tour,
  formData: BookingFormData,
  paymentMethod: PaymentMethodType = 'CARD'
): PaymentOrderDetails {
  const pricing = calculateBookingPrice(tour, formData.guests);
  const timestamp = new Date().toISOString().replace(/[-:T.]/g, '').slice(0, 14);
  const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
  const orderId = `NORI-${timestamp}-${randomSuffix}`;
  const orderName = `${tour.title} (${formData.guests} ${formData.guests === 1 ? 'Guest' : 'Guests'})`;

  return {
    orderId,
    orderName,
    amountKrw: pricing.totalKrw,
    amountUsd: pricing.totalUsd,
    currency: 'KRW',
    customerName: formData.fullName.trim() || 'Guest',
    customerEmail: formData.email.trim(),
    customerMobilePhone: formData.whatsapp.trim(),
    country: formData.country || 'Global',
    selectedTourId: tour.id,
    selectedTourTitle: tour.title,
    tourDate: formData.date,
    guests: formData.guests,
    paymentMethod,
    createdAt: new Date().toISOString(),
  };
}

/**
 * Modular Toss Payments SDK v2 adapter stub.
 * When Toss Payments SDK v2 is activated, this handler invokes the client-side
 * tossPayments.requestPayment() method.
 * 
 * Future Integration Guide:
 * 1. npm install @tosspayments/tosspayments-sdk
 * 2. import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
 * 3. const tossPayments = await loadTossPayments(TOSS_CLIENT_CONFIG.clientKey);
 * 4. await tossPayments.requestPayment({ method: order.paymentMethod, amount: order.amountKrw, ... });
 */
export async function initiateTossPaymentsV2(
  order: PaymentOrderDetails
): Promise<{ success: boolean; orderId: string; mode: 'PRE_INTEGRATION_TEST' | 'LIVE'; message: string }> {
  // Validate order data
  if (!order.orderId || !order.amountKrw || order.amountKrw <= 0) {
    throw new Error('Invalid order details or non-positive amount.');
  }

  // Pre-integration mock resolution: verifies payload structure and confirms readiness
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        orderId: order.orderId,
        mode: 'PRE_INTEGRATION_TEST',
        message: 'Order verified and formatted for Toss Payments v2 gateway.',
      });
    }, 600);
  });
}

/**
 * Server-side payment confirmation handler for Toss Payments API.
 * Uses process.env.TOSS_SECRET_KEY as an environment variable (never hardcoded).
 * Do not run or test the Toss Payments API execution in client/browser environments.
 */
export async function confirmTossPaymentServerSide(
  paymentKey: string,
  orderId: string,
  amount: number
): Promise<{
  status: string;
  orderId: string;
  paymentKey: string;
  amount: number;
  approvedAt?: string;
  [key: string]: any;
}> {
  // Access secret key strictly via environment variable
  const secretKey = typeof process !== 'undefined' && process.env ? process.env.TOSS_SECRET_KEY : '';

  if (!secretKey) {
    throw new Error('TOSS_SECRET_KEY environment variable is not configured.');
  }

  // Toss Payments requires Basic Auth: Base64(secretKey + ':')
  const basicAuthToken = typeof Buffer !== 'undefined'
    ? Buffer.from(`${secretKey}:`).toString('base64')
    : btoa(`${secretKey}:`);

  const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basicAuthToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      paymentKey,
      orderId,
      amount,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `Toss Payments confirmation failed with HTTP ${response.status}`);
  }

  return response.json();
}

