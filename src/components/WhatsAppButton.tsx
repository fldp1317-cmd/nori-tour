import React from 'react';

/**
 * Floating WhatsApp Contact Button for NORI TOUR
 * Connected to official WhatsApp Business: +82 10-4829-5754
 * Pre-filled message: "Hi NORI! I have a question about your beauty experiences in Seoul."
 */
export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '821048295754';
  const message = 'Hi NORI! I have a question about your beauty experiences in Seoul.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside
      aria-label="WhatsApp Concierge Inquiry"
      className="fixed bottom-6 right-6 z-40 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NORI TOUR on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#302B29] text-[#F7F2EC] shadow-xl border border-[#D9B4B0]/40 hover:border-[#D9B4B0] hover:bg-[#3D3734] transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D9B4B0] focus:ring-offset-2 focus:ring-offset-[#F7F2EC]"
      >
        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            className="text-[#25D366] group-hover:scale-110 transition-transform duration-200"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.9 11.9 0 0 0 5.83 1.51h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-.125-6.21-3.52-8.43zM12.06 21.87h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.88 9.88 0 0 1-1.52-5.26c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7.01 2.9a9.85 9.85 0 0 1 2.91 7.01c0 5.46-4.45 9.9-9.91 9.9zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.24-.6-.49-.52-.68-.53l-.58-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.92 1.23 3.12c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
          </svg>
        </div>

        {/* Label */}
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-[11px] sm:text-xs font-medium tracking-wider text-[#F7F2EC]">
            WhatsApp
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"
            title="Online"
            aria-hidden="true"
          />
        </div>
      </a>
    </aside>
  );
};
