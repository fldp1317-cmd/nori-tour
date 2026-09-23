import React, { useState } from 'react';
import { Star, ShieldCheck, Heart, Sparkles, Plus, CheckCircle2, X, Camera, Image } from 'lucide-react';
import { Review, Tour } from '../types';

interface ReviewsPageProps {
  reviews: Review[];
  tours: Tour[];
  onAddReview: (review: Review) => void;
  onBookExperience: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  reviews,
  tours,
  onAddReview,
  onBookExperience,
}) => {
  const [filterTourId, setFilterTourId] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New review form fields (matching required review data fields)
  const [newGuestName, setNewGuestName] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const [newTourId, setNewTourId] = useState(tours[0]?.id || '');
  const [newRating, setNewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');
  const [newOptionalPhoto, setNewOptionalPhoto] = useState('');
  const [newPhotoConsent, setNewPhotoConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const filteredReviews = reviews.filter((r) => {
    if (filterTourId === 'all') return true;
    return r.tourId === filterTourId;
  });

  const handleCreateReview = (e: React.FormEvent) => {
    e.preventDefault();
    const tourMatch = tours.find(t => t.id === newTourId);
    const expTitle = tourMatch ? tourMatch.title : 'Curated Seoul Experience';

    const created: Review = {
      id: 'rev-user-' + Date.now(),
      tourId: newTourId,
      tourName: expTitle,
      experienceBooked: expTitle,
      guestName: newGuestName,
      country: newCountry,
      rating: newRating,
      date: 'Just now',
      reviewText: newReviewText,
      optionalPhoto: newOptionalPhoto || undefined,
      guestPhoto: newOptionalPhoto || undefined,
      photoConsent: newPhotoConsent,
      verified: true
    };

    onAddReview(created);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setNewGuestName('');
      setNewCountry('');
      setNewReviewText('');
      setNewOptionalPhoto('');
      setNewPhotoConsent(true);
    }, 2000);
  };

  return (
    <div id="reviews-page" className="w-full pt-28 pb-24 bg-[#F7F2EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Title Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFAF7] border border-[#EADBCE]">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#786761] font-medium">
              Guest Reflections • Nori
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-editorial font-light text-[#302B29] tracking-tight">
            Traveler Testimonials
          </h1>
          <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed max-w-xl mx-auto">
            Honest reflections from travelers who explored K-beauty, wellness, and Korean culture at an unhurried, personal pace.
          </p>
        </div>

        {/* Rating Metrics & Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl mb-14 shadow-xs">
          <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-[#EADBCE] pb-6 md:pb-0 md:pr-6">
            <div className="flex items-center justify-center md:justify-start gap-1 text-[#F59E0B] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
              ))}
            </div>
            <span className="text-3xl sm:text-4xl font-editorial font-medium text-[#302B29]">
              4.98 / 5.0
            </span>
            <p className="text-xs text-[#786761] mt-1">Average guest satisfaction rating</p>
          </div>

          <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-[#EADBCE] pb-6 md:pb-0 md:pr-6">
            <span className="text-3xl sm:text-4xl font-editorial font-medium text-[#302B29]">
              1,240+
            </span>
            <p className="text-xs text-[#786761] mt-1">Verified international guests</p>
            <p className="text-[11px] text-[#9B8983] mt-0.5">Independent & zero-pressure</p>
          </div>

          <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-[#EADBCE] pb-6 md:pb-0 md:pr-6">
            <span className="text-3xl sm:text-4xl font-editorial font-medium text-[#302B29]">
              34+
            </span>
            <p className="text-xs text-[#786761] mt-1">Countries represented</p>
            <p className="text-[11px] text-[#9B8983] mt-0.5">USA, UK, Europe, Australia, Asia</p>
          </div>

          <div className="flex flex-col justify-center items-center md:items-start">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] text-xs uppercase tracking-[0.16em] font-medium rounded-full transition-all flex items-center gap-2 shadow-xs"
            >
              <Plus className="w-3.5 h-3.5 text-[#E9D2CD]" />
              <span>Leave a Review</span>
            </button>
            <span className="text-[11px] text-[#786761] mt-2">Traveled with NORI recently?</span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EADBCE]">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#786761] uppercase tracking-wider">
              Filter by Experience:
            </span>
            <select
              value={filterTourId}
              onChange={(e) => setFilterTourId(e.target.value)}
              className="px-4 py-2 bg-[#FCFAF7] border border-[#EADBCE] rounded-full text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
            >
              <option value="all">All Experiences ({reviews.length})</option>
              {tours.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>
          </div>

          <span className="text-xs text-[#786761]">
            Showing <strong>{filteredReviews.length}</strong> testimonials
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] flex flex-col justify-between hover:border-[#D9B4B0] transition-all shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#9B8983]">{rev.date}</span>
                </div>

                <p className="text-sm font-editorial text-[#302B29] italic leading-relaxed mb-6 font-light">
                  "{rev.reviewText}"
                </p>

                {/* Optional Photo if provided & consented */}
                {rev.optionalPhoto && rev.photoConsent && (
                  <div className="mb-6 rounded-2xl overflow-hidden aspect-16/10 bg-[#ECE4D9] border border-[#EADBCE]">
                    <img
                      src={rev.optionalPhoto}
                      alt={`${rev.guestName}'s experience`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#EADBCE] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {rev.guestPhoto ? (
                    <img
                      src={rev.guestPhoto}
                      alt={rev.guestName}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-[#EADBCE]"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-xs font-semibold text-[#302B29]">
                      {rev.guestName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-xs font-semibold text-[#302B29] tracking-wide">
                      {rev.guestName}
                    </h4>
                    <p className="text-[11px] text-[#786761]">{rev.country}</p>
                    <p className="text-[10px] text-[#D9B4B0] font-medium truncate max-w-[180px]">
                      {rev.experienceBooked || rev.tourName}
                    </p>
                  </div>
                </div>

                {rev.verified && (
                  <span className="px-2.5 py-1 rounded-full bg-[#F4E8E5] border border-[#EADBCE] text-[#302B29] text-[10px] font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#D9B4B0]" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onBookExperience}
            className="px-8 py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all shadow-md"
          >
            Find Your Glow with NORI
          </button>
        </div>
      </div>

      {/* Leave a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-lg bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8 relative my-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-[#786761] hover:text-[#302B29]"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#D9B4B0] mx-auto animate-bounce" />
                <h3 className="text-2xl font-editorial text-[#302B29]">
                  Thank You for Sharing
                </h3>
                <p className="text-xs text-[#786761]">
                  Your reflection and verified review data have been registered with NORI TOUR.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-editorial font-light text-[#302B29] mb-1">
                  Share Your Reflection
                </h3>
                <p className="text-xs text-[#786761] mb-6">
                  Help fellow international travelers discover mindful, honest K-beauty experiences in Seoul.
                </p>

                <form onSubmit={handleCreateReview} className="space-y-4">
                  {/* Guest Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newGuestName}
                      onChange={(e) => setNewGuestName(e.target.value)}
                      placeholder="e.g. Maya Lin"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F2EC] border border-[#EADBCE] text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                      Home City & Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={newCountry}
                      onChange={(e) => setNewCountry(e.target.value)}
                      placeholder="e.g. Sydney, Australia"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F2EC] border border-[#EADBCE] text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                    />
                  </div>

                  {/* Experience Booked */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                      Experience Booked *
                    </label>
                    <select
                      value={newTourId}
                      onChange={(e) => setNewTourId(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F2EC] border border-[#EADBCE] text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                    >
                      {tours.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                      Rating *
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setNewRating(num)}
                          className="p-1.5 focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              num <= newRating
                                ? 'text-[#F59E0B] fill-[#F59E0B]'
                                : 'text-[#EADBCE]'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                      Review Text *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newReviewText}
                      onChange={(e) => setNewReviewText(e.target.value)}
                      placeholder="Tell us about the clinic consultation, skin results, and your host..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F2EC] border border-[#EADBCE] text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                    />
                  </div>

                  {/* Optional Photo */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                      Optional Photo (Image URL or portrait)
                    </label>
                    <input
                      type="url"
                      value={newOptionalPhoto}
                      onChange={(e) => setNewOptionalPhoto(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F7F2EC] border border-[#EADBCE] text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                    />
                  </div>

                  {/* Photo Consent */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="photo-consent"
                      checked={newPhotoConsent}
                      onChange={(e) => setNewPhotoConsent(e.target.checked)}
                      className="mt-0.5 rounded border-[#EADBCE] text-[#302B29] focus:ring-[#D9B4B0]"
                    />
                    <label htmlFor="photo-consent" className="text-[11px] text-[#786761] leading-tight">
                      Photo & Testimonial Consent: I agree to let NORI TOUR feature my testimonial and optional photo in guest reflection materials in accordance with our Privacy Policy.
                    </label>
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2.5 text-xs uppercase tracking-wider text-[#786761] hover:text-[#302B29]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] text-xs uppercase tracking-wider font-semibold rounded-full shadow-xs"
                    >
                      Submit Reflection
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
