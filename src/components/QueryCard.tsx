import type { Query } from '../data/queries';
import Card from './Card';
import Tag from './Tag';

export default function QueryCard({ query }: { query: Query }) {
  return (
    <Card className="p-5 hover:border-base-600 hover:translate-x-0.5 hover:shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-[linear-gradient(135deg,rgba(24,34,51,0.8)_0%,rgba(36,48,67,0.5)_100%)] border border-base-700/80 shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
          <span className="text-xs font-semibold text-text-muted">{query.number}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-text-primary mb-1.5">{query.title}</h3>
          <p className="text-xs text-text-secondary leading-relaxed">{query.description}</p>
        </div>
        <Tag type={query.tag} />
      </div>
    </Card>
  );
}
