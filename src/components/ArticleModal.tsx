import React from 'react';
import { X, Sparkles, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { JournalArticle } from '../types';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
  onBookExperience: (tourId?: string) => void;
}

const QUOTE_EMPHASIS_LINES = new Set([
  '“You don’t need it.”',
  '“If 5% is good, wouldn’t 10% be twice as good?”',
  '“10% does not mean twice as effective as 5%.”',
  '“Does your skin actually need this?”',
  "“The best niacinamide percentage isn't the highest one. It's the one your skin actually enjoys using consistently.”",
  '“Not every dark spot is the same.”',
  '“Sunscreen.”',
  '“Vitamin C helps manage pigment production. It is not an eraser.”',
  '“Higher does not automatically mean better.”',
  '“Usually, no.”',
  '“What caused the pigmentation?”',
  '“Your skin does not need to be perfectly even for you to be beautiful.”',
  '“Treat the things that bother you, if you want to. But never confuse a dark spot with something being wrong with you.”',
  '“Ingredient lists matter. Formulation matters too.”',
  '“Understanding an ingredient does not create an obligation to buy it.”',
  '“Before asking what else your skin needs, sometimes it is worth asking whether it simply needs a little less.”',
  '“You do not need to treat your nasolabial folds.”',
  '“There is a dent. Fill the dent.”',
  '“A line is what you see. It is not necessarily the cause.”',
  '“Not every fold should automatically be treated by filling the fold itself.”',
  '“Can we soften what bothers you?”',
  '“How do we erase this line?”',
  '“Do nothing.”',
  '“You have nasolabial folds. Get JUVGEN.”',
  '“First, understand why your fold is prominent.”',
  '“I want nasolabial filler.”',
  '“Why are my nasolabial folds prominent?”',
  '“What happens if I do nothing?”',
  '“Don\'t choose a treatment because you discovered a line.”',
  '“That is a perfectly valid beauty decision too.”',
]);

const EDITORIAL_EMPHASIS_LINES = new Set([
  'That kind of glow cannot be created by a product.',
  'It is about becoming healthy, confident, cared for, and completely yourself.',
  'You are applying a complete formula, not a number.',
  'Your skin gets the final vote.',
  'Cleanse → Vitamin C → Moisturizer → Sunscreen',
  'Skincare should give you options, not new insecurities.',
  'It is organization.',
  'TEWL.',
  'It is about supporting your skin in doing the job it was designed to do.',
  'It means anatomy and technique matter.',
  'NORI believes aesthetic medicine is at its best when it gives people choices, not new insecurities.',
]);

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onBookExperience,
}) => {
  if (!article) return null;

  return (
    <div
      id="article-reader-overlay"
      className="fixed inset-0 z-50 bg-[#1C1917] text-[#F7F2EC] overflow-y-auto"
    >
      {/* Minimal Sticky Editorial Navigation Bar */}
      <div className="sticky top-0 z-20 bg-[#1C1917]/95 backdrop-blur-md border-b border-[#3D3634]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#E8DFD7] hover:text-[#F7F2EC] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D9B4B0]" />
            <span>Back to Journal</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.26em] text-[#D9B4B0] font-medium">
              {article.category}
            </span>
            <button
              onClick={onClose}
              aria-label="Close article"
              className="p-1.5 rounded-full text-[#E8DFD7] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Article Canvas */}
      <article
        id="article-reader-content"
        className="w-full bg-[#1C1917] px-6 sm:px-10 pt-14 sm:pt-24 pb-24 sm:pb-32"
      >
        {/* Editorial Header */}
        <header className="max-w-2xl mx-auto text-center space-y-6 pb-14 sm:pb-16 border-b border-[#3D3634] animate-reveal-1">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#D9B4B0] font-medium block">
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-sans font-bold text-[#F7F2EC] leading-[1.15] tracking-tight [text-wrap:balance]">
            {article.title}
          </h1>

          {(article.subtitle || article.excerpt) && (
            <p className="text-xl sm:text-2xl font-serif italic font-normal text-[#E9D2CD] leading-snug pt-1 [text-wrap:balance]">
              {article.subtitle || article.excerpt}
            </p>
          )}

          <div className="pt-4 flex flex-col items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D9B4B0]" />
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#BFB3AC] font-normal">
              {article.author.name}
            </p>
          </div>
        </header>

        {/* Comfortable Reading Column */}
        <div className="max-w-[620px] mx-auto pt-14 sm:pt-16 space-y-14 sm:space-y-16 text-[#F7F2EC]">
          {article.sections ? (
            article.sections.map((section, sIdx) => (
              <section
                key={sIdx}
                className={sIdx > 0 ? 'pt-10 sm:pt-12 border-t border-[#3D3634] space-y-6' : 'space-y-6'}
              >
                {section.heading && (
                  <h2
                    className={
                      section.heading === 'NORI NOTE'
                        ? 'text-xs uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold pb-1'
                        : 'text-2xl sm:text-3xl font-sans font-bold text-[#F7F2EC] leading-snug tracking-tight pb-1 [text-wrap:balance]'
                    }
                  >
                    {section.heading}
                  </h2>
                )}

                <div className="space-y-6">
                  {section.paragraphs.map((paragraph, pIdx) => {
                    const isFirstLead = sIdx === 0 && pIdx === 0;
                    const isMultiLineStanza = paragraph.includes('\n');
                    const isQuoteEmphasis = QUOTE_EMPHASIS_LINES.has(paragraph);
                    const isEditorialEmphasis = EDITORIAL_EMPHASIS_LINES.has(paragraph);

                    if (isQuoteEmphasis) {
                      return (
                        <blockquote
                          key={pIdx}
                          className="py-3.5 px-5 my-3 text-xl sm:text-2xl font-serif italic text-[#F7F2EC] leading-snug tracking-[-0.005em] border-l-2 border-[#D9B4B0] bg-[#252120] rounded-r-xl"
                        >
                          {paragraph}
                        </blockquote>
                      );
                    }

                    if (isEditorialEmphasis) {
                      return (
                        <p
                          key={pIdx}
                          className="py-2 my-1 text-lg sm:text-xl font-serif italic text-[#E9D2CD] leading-[1.6]"
                        >
                          {paragraph}
                        </p>
                      );
                    }

                    if (isMultiLineStanza) {
                      return (
                        <p
                          key={pIdx}
                          className="whitespace-pre-line pl-5 border-l border-[#3D3634] text-[15px] sm:text-[17px] text-[#BFB3AC] font-normal leading-[1.95] my-2"
                        >
                          {paragraph}
                        </p>
                      );
                    }

                    if (isFirstLead) {
                      return (
                        <p
                          key={pIdx}
                          className="text-lg sm:text-[19px] text-[#F7F2EC] font-medium leading-[1.85]"
                        >
                          {paragraph}
                        </p>
                      );
                    }

                    return (
                      <p
                        key={pIdx}
                        className="whitespace-pre-line text-[15px] sm:text-[17px] text-[#BFB3AC] font-normal leading-[1.88]"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Understated Editorial NORI PICK Note */}
                {section.noriPick && (
                  <aside className="mt-8 pt-6 pb-6 px-6 sm:px-8 rounded-2xl bg-[#252120] border border-[#3D3634] space-y-3.5 shadow-md">
                    <span className="text-[10px] uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold block">
                      {section.noriPick.label}
                    </span>

                    <div>
                      <a
                        href={section.noriPick.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-baseline gap-1.5 text-xl sm:text-2xl font-sans font-bold text-[#F7F2EC] hover:text-[#E9D2CD] transition-colors border-b border-[#D9B4B0] pb-0.5"
                      >
                        <span>{section.noriPick.productName}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#D9B4B0] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0 self-center" />
                      </a>
                    </div>

                    <div className="space-y-3.5 pt-1">
                      {section.noriPick.paragraphs.map((pickPara, pickIdx) =>
                        pickPara.startsWith('“') ? (
                          <p
                            key={pickIdx}
                            className="py-1 text-base sm:text-lg font-serif italic text-[#F7F2EC] leading-snug"
                          >
                            {pickPara}
                          </p>
                        ) : (
                          <p
                            key={pickIdx}
                            className="whitespace-pre-line text-[14px] sm:text-[15.5px] text-[#BFB3AC] font-normal leading-[1.82]"
                          >
                            {pickPara}
                          </p>
                        )
                      )}
                    </div>
                  </aside>
                )}

                {section.referenceLink && (
                  <div className="pt-2">
                    <a
                      href={section.referenceLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/ref inline-flex items-center gap-1.5 text-sm font-sans text-[#E8DFD7] hover:text-[#E9D2CD] transition-colors border-b border-[#3D3634] hover:border-[#D9B4B0] pb-0.5"
                    >
                      <span>{section.referenceLink.text}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D9B4B0] group-hover/ref:translate-x-0.5 group-hover/ref:-translate-y-0.5 transition-transform shrink-0" />
                    </a>
                  </div>
                )}
              </section>
            ))
          ) : (
            <div className="space-y-6">
              {(article.content || article.articleContent || []).map((p, idx) => (
                <p
                  key={idx}
                  className="whitespace-pre-line text-[15px] sm:text-[17px] text-[#BFB3AC] font-normal leading-[1.88]"
                >
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Understated Editorial Sign-Off */}
          {article.signOff && (
            <footer className="pt-10 mt-12 border-t border-[#3D3634] flex items-center justify-between">
              <p className="text-sm font-serif italic text-[#BFB3AC] tracking-[0.04em]">
                {article.signOff}
              </p>
              <span className="w-6 h-[1px] bg-[#D9B4B0]/70" />
            </footer>
          )}

          {/* Subtle Invitation Footer */}
          <div className="pt-10">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#252120] border border-[#3D3634] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1.5 text-center sm:text-left">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                  Personalized Korea Planning • NORI
                </p>
                <h4 className="text-xl sm:text-2xl font-sans font-bold text-[#F7F2EC]">
                  Planning a trip to Korea?
                </h4>
                <p className="text-xs text-[#BFB3AC] max-w-md font-normal leading-relaxed">
                  Tell us what you want to experience, and NORI will create a personalized itinerary and quote around you.
                </p>
              </div>
              <button
                onClick={() => onBookExperience()}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#1C1917] rounded-full text-xs uppercase tracking-[0.18em] font-bold transition-all shadow-md inline-flex items-center justify-center gap-2 shrink-0 group cursor-pointer active:scale-[0.98]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#1C1917] group-hover:scale-110 transition-transform duration-200" />
                <span>PLAN MY TRIP</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
