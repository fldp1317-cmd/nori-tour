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
      className="fixed inset-0 z-50 bg-[#FBF9F6] overflow-y-auto"
    >
      {/* Minimal Sticky Editorial Navigation Bar */}
      <div className="sticky top-0 z-20 bg-[#FBF9F6]/90 backdrop-blur-md border-b border-[#EFE7DF]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#786761] hover:text-[#302B29] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#B69688]" />
            <span>Back to Journal</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.26em] text-[#9A8881]">
              {article.category}
            </span>
            <button
              onClick={onClose}
              aria-label="Close article"
              className="p-1.5 rounded-full text-[#786761] hover:text-[#302B29] hover:bg-[#F3EDE6] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Article Canvas */}
      <article
        id="article-reader-content"
        className="w-full bg-[#FBF9F6] px-6 sm:px-10 pt-14 sm:pt-24 pb-24 sm:pb-32"
      >
        {/* Editorial Header */}
        <header className="max-w-2xl mx-auto text-center space-y-6 pb-14 sm:pb-16 border-b border-[#EAE0D6]">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#B69688] font-medium block">
            {article.category}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-editorial font-light text-[#302B29] leading-[1.12] tracking-[-0.01em]">
            {article.title}
          </h1>

          {(article.subtitle || article.excerpt) && (
            <p className="text-2xl sm:text-[28px] font-editorial italic font-light text-[#5E504B] leading-snug pt-1">
              {article.subtitle || article.excerpt}
            </p>
          )}

          <div className="pt-4 flex flex-col items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D9B4B0]" />
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#786761] font-normal">
              {article.author.name}
            </p>
          </div>
        </header>

        {/* Comfortable Reading Column */}
        <div className="max-w-[600px] mx-auto pt-14 sm:pt-16 space-y-14 sm:space-y-16 text-[#302B29]">
          {article.sections ? (
            article.sections.map((section, sIdx) => (
              <section
                key={sIdx}
                className={sIdx > 0 ? 'pt-10 sm:pt-12 border-t border-[#EFE7DF] space-y-6' : 'space-y-6'}
              >
                {section.heading && (
                  <h2
                    className={
                      section.heading === 'NORI NOTE'
                        ? 'text-xs uppercase tracking-[0.26em] text-[#B69688] font-semibold pb-1'
                        : 'text-2xl sm:text-[32px] font-editorial font-light text-[#302B29] leading-[1.2] tracking-[-0.005em] pb-1'
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
                        <p
                          key={pIdx}
                          className="py-2.5 my-1.5 text-2xl sm:text-[28px] font-editorial italic font-light text-[#302B29] leading-snug tracking-[-0.005em]"
                        >
                          {paragraph}
                        </p>
                      );
                    }

                    if (isEditorialEmphasis) {
                      return (
                        <p
                          key={pIdx}
                          className="py-2 my-1 text-xl sm:text-[23px] font-editorial italic font-light text-[#302B29] leading-[1.55]"
                        >
                          {paragraph}
                        </p>
                      );
                    }

                    if (isMultiLineStanza) {
                      return (
                        <p
                          key={pIdx}
                          className="whitespace-pre-line pl-5 border-l border-[#DFC9C2] text-[15px] sm:text-[17px] text-[#463E3B] font-light leading-[1.95] my-2"
                        >
                          {paragraph}
                        </p>
                      );
                    }

                    if (isFirstLead) {
                      return (
                        <p
                          key={pIdx}
                          className="text-lg sm:text-[19px] text-[#302B29] font-light leading-[1.85]"
                        >
                          {paragraph}
                        </p>
                      );
                    }

                    return (
                      <p
                        key={pIdx}
                        className="whitespace-pre-line text-[15px] sm:text-[17px] text-[#3D3633] font-light leading-[1.88]"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Understated Editorial NORI PICK Note */}
                {section.noriPick && (
                  <aside className="mt-8 pt-6 pb-6 px-6 sm:px-8 rounded-2xl bg-[#F5EFE8]/75 border border-[#E8DDD2] space-y-3.5">
                    <span className="text-[10px] uppercase tracking-[0.26em] text-[#B69688] font-semibold block">
                      {section.noriPick.label}
                    </span>

                    <div>
                      <a
                        href={section.noriPick.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-baseline gap-1.5 text-xl sm:text-2xl font-editorial font-light text-[#302B29] hover:text-[#786761] transition-colors border-b border-[#D9B4B0] hover:border-[#786761] pb-0.5"
                      >
                        <span>{section.noriPick.productName}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#B69688] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0 self-center" />
                      </a>
                    </div>

                    <div className="space-y-3.5 pt-1">
                      {section.noriPick.paragraphs.map((pickPara, pickIdx) =>
                        pickPara.startsWith('“') ? (
                          <p
                            key={pickIdx}
                            className="py-1 text-lg sm:text-xl font-editorial italic font-light text-[#302B29] leading-snug"
                          >
                            {pickPara}
                          </p>
                        ) : (
                          <p
                            key={pickIdx}
                            className="whitespace-pre-line text-[14px] sm:text-[15.5px] text-[#4A413E] font-light leading-[1.82]"
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
                      className="group/ref inline-flex items-center gap-1.5 text-sm font-editorial italic text-[#5E504B] hover:text-[#302B29] transition-colors border-b border-[#D9B4B0] hover:border-[#786761] pb-0.5"
                    >
                      <span>{section.referenceLink.text}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B69688] group-hover/ref:translate-x-0.5 group-hover/ref:-translate-y-0.5 transition-transform shrink-0" />
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
                  className="whitespace-pre-line text-[15px] sm:text-[17px] text-[#3D3633] font-light leading-[1.88]"
                >
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Understated Editorial Sign-Off */}
          {article.signOff && (
            <footer className="pt-10 mt-12 border-t border-[#EAE0D6] flex items-center justify-between">
              <p className="text-sm font-editorial italic text-[#786761] tracking-[0.04em]">
                {article.signOff}
              </p>
              <span className="w-6 h-[1px] bg-[#D9B4B0]/70" />
            </footer>
          )}

          {/* Subtle Invitation Footer */}
          <div className="pt-10">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#F6F1EB] border border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center sm:text-left">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#B69688] font-medium">
                  Personalized Korea Planning • NORI
                </p>
                <h4 className="text-xl sm:text-2xl font-editorial font-light text-[#302B29]">
                  Planning a trip to Korea?
                </h4>
                <p className="text-xs text-[#786761] max-w-md font-light leading-relaxed">
                  Tell us what you want to experience, and NORI will create a personalized itinerary and quote around you.
                </p>
              </div>
              <button
                onClick={() => onBookExperience()}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all inline-flex items-center justify-center gap-2 shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D9B4B0]" />
                <span>PLAN MY TRIP</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
