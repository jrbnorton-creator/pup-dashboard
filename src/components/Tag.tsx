import type { TagType } from '../data/queries';

const tagConfig = {
  important: {
    label: 'Important',
    className: 'text-error bg-error/10 border border-error/20',
  },
  saving: {
    label: 'Potential saving',
    className: 'text-accent bg-accent/10 border border-accent/20',
  },
  headsup: {
    label: 'Heads up',
    className: 'text-warning bg-warning/10 border border-warning/20',
  },
};

export default function Tag({ type }: { type: TagType }) {
  if (!type) return null;
  const config = tagConfig[type];
  return (
    <span className={`text-[10px] font-medium px-2.5 py-1 rounded shrink-0 ${config.className}`}>
      {config.label}
    </span>
  );
}
