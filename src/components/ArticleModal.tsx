import React from 'react';
import { X, Clock, Calendar, Sparkles, ArrowLeft, ArrowRight, BookOpen, Compass } from 'lucide-react';
import { JournalArticle } from '../types';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
  onBookExperience: (tourId?: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onBookExperience,
}) => {
  if (!article) return null;

  return (
    <div
      id="article-reader-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
    >
      <div
        id="article-reader-content"
        className="relative w-full max-w-4xl bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
      >
        {/* Top Control Bar */}
        <div className="bg-[#FCFAF7] border-b border-[#EADBCE] px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#786761] hover:text-[#302B29] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </button>
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 bg-[#F4E8E5] text-[11px] uppercase tracking-[0.18em] text-[#302B29] font-medium rounded-full border border-[#EADBCE]">
              {article.category}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#786761] hover:text-[#302B29] hover:bg-[#F7F2EC] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-12 space-y-8">
          {/* Article Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-xs text-[#786761]">
              <span>{article.publishDate || article.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D9B4B0]" />
                {article.readTime}
              </span>
              {article.relatedExperience && (
                <>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-[#302B29] font-medium">
                    <Compass className="w-3.5 h-3.5 text-[#D9B4B0]" />
                    {article.relatedExperience}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29] leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-[#786761] font-editorial italic leading-relaxed border-l-2 border-[#D9B4B0] pl-4">
              "{article.excerpt}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-[#EADBCE]"
              />
              <div>
                <p className="text-xs font-semibold text-[#302B29] tracking-wider uppercase">
                  {article.author.name}
                </p>
                <p className="text-[11px] text-[#786761]">{article.author.role}</p>
              </div>
            </div>
          </div>

          {/* Hero Photography */}
          <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-[#ECE4D9] border border-[#EADBCE]">
            <img
              src={article.heroImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Paragraphs */}
          <div className="max-w-2xl space-y-6 text-[#302B29] text-base sm:text-lg font-light leading-relaxed">
            {(article.content || []).map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Related Experience Banner */}
          {article.relatedExperience && (
            <div className="p-6 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#D9B4B0] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Related Curated Experience
                </span>
                <h4 className="text-lg font-editorial font-medium text-[#302B29]">
                  {article.relatedExperience}
                </h4>
                <p className="text-xs text-[#786761]">
                  Experience the techniques, products, and clinics discussed in this article.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookExperience();
                }}
                className="px-5 py-2.5 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] text-xs uppercase tracking-wider rounded-full font-medium transition-all shrink-0 flex items-center gap-1.5"
              >
                <span>Book This Experience</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E9D2CD]" />
              </button>
            </div>
          )}

          {/* Tags */}
          <div className="pt-6 border-t border-[#EADBCE] flex flex-wrap gap-2">
            {(article.tags || []).map((tag) => (
              <span
                key={tag}
                className="text-xs px-3.5 py-1 bg-[#F7F2EC] text-[#786761] rounded-full border border-[#EADBCE]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* SEO Meta Summary */}
          {(article.seoTitle || article.seoDescription) && (
            <div className="p-4 rounded-xl bg-[#FCFAF7] border border-[#EADBCE] text-[11px] text-[#786761] space-y-1">
              <span className="font-semibold text-[#302B29] block uppercase tracking-wider text-[10px]">
                Beauty Journal Metadata:
              </span>
              <p><strong>SEO Title:</strong> {article.seoTitle || article.title}</p>
              <p><strong>SEO Meta Description:</strong> {article.seoDescription || article.excerpt}</p>
            </div>
          )}

          {/* Bottom Editorial Callout */}
          <div className="bg-[#302B29] text-[#F7F2EC] p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs uppercase tracking-[0.22em] text-[#D9B4B0] font-semibold">
                Curated Experience • 놀이
              </p>
              <h4 className="text-xl sm:text-2xl font-editorial font-light text-[#F7F2EC]">
                Experience these beauty rituals in person
              </h4>
              <p className="text-xs text-[#D9B4B0] max-w-md font-light">
                Our bilingual curators guide you through accredited clinics and private Hanok sanctuaries across Seoul.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookExperience();
              }}
              className="px-6 py-3 bg-[#D9B4B0] text-[#302B29] hover:bg-[#E9D2CD] text-xs uppercase tracking-[0.18em] font-semibold rounded-full transition-all whitespace-nowrap shadow-xs"
            >
              Book an Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
