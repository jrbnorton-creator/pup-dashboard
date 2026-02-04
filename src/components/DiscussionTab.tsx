import { queries } from '../data/queries';
import QueryCard from './QueryCard';
import Card from './Card';

export default function DiscussionTab() {
  return (
    <div>
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-text-primary mb-1">Things to discuss</h2>
        <p className="text-sm text-text-muted mb-8">
          We've flagged a few items that need your input. Have a read through before your review session so we can work through them together.
        </p>

        <div className="space-y-3">
          {queries.map((query) => (
            <QueryCard key={query.number} query={query} />
          ))}
        </div>
      </section>

      {/* Book review session CTA */}
      <section className="mb-16">
        <Card
          className="p-8 text-center relative"
          style={{ background: 'linear-gradient(135deg, rgba(18, 24, 38, 0.95) 0%, rgba(15, 26, 42, 0.9) 100%)' }}
        >
          <div className="absolute inset-[-1px] rounded-xl pointer-events-none" style={{
            background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.15) 0%, transparent 40%, rgba(45, 212, 191, 0.1) 100%)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: 1,
          }} />
          <h3 className="text-xl font-semibold text-text-primary mb-3">Ready to talk it through?</h3>
          <p className="text-sm text-text-muted mb-6 max-w-md mx-auto leading-relaxed">
            Book a review session and we'll work through the audit findings, walk you through the restructured accounts, and map out the implementation plan.
          </p>
          <a
            href="#CALENDLY_LINK"
            className="inline-block text-sm font-semibold rounded-lg px-9 py-3.5 transition-all duration-300 shadow-[0_4px_16px_rgba(45,212,191,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(45,212,191,0.3)]"
            style={{
              background: 'linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%)',
              color: '#0B0F14',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book your review session
          </a>
          <p className="text-[11px] text-text-muted mt-4">Sessions are typically 1.5 hours</p>
        </Card>
      </section>
    </div>
  );
}
