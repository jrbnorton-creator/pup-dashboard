import Card from './Card';

interface AfterTabProps {
  onTabChange: (tab: 'overview' | 'before' | 'after' | 'audit' | 'discussion' | 'map') => void;
}

export default function AfterTab({ onTabChange }: AfterTabProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">Your recode is in progress</h3>
      <p className="text-sm text-neutral-500 max-w-sm leading-relaxed mb-10">
        Once complete, this section will show a side-by-side comparison of your financials before and after the reclassification.
      </p>

      <div className="max-w-2xl w-full">
        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-600 mb-5">Coming soon</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Card className="p-5 text-left opacity-40">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-2">True net profit</p>
            <p className="text-lg font-semibold text-white">--</p>
            <p className="text-[11px] text-neutral-500 mt-2">vs $180,878 before</p>
          </Card>
          <Card className="p-5 text-left opacity-40">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-2">Materials split</p>
            <p className="text-lg font-semibold text-white">--</p>
            <p className="text-[11px] text-neutral-500 mt-2">vs 1 account before</p>
          </Card>
          <Card className="p-5 text-left opacity-40">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-2">Accounts restructured</p>
            <p className="text-lg font-semibold text-white">--</p>
            <p className="text-[11px] text-neutral-500 mt-2">clean chart of accounts</p>
          </Card>
        </div>

        <Card className="p-5 mt-4 opacity-40">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 pb-3">Metric</th>
                <th className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 pb-3 text-right">Before</th>
                <th className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 pb-3 text-right">After</th>
                <th className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 pb-3 text-right">Change</th>
              </tr>
            </thead>
            <tbody className="text-neutral-400">
              {[
                { metric: 'Revenue', before: '$1,241,695' },
                { metric: 'Cost of sales', before: '$921,328' },
                { metric: 'Gross profit', before: '$320,368' },
                { metric: 'Net profit', before: '$180,878' },
                { metric: 'Material accounts', before: '2' },
              ].map((row) => (
                <tr key={row.metric} className="border-t border-neutral-800">
                  <td className="py-3">{row.metric}</td>
                  <td className="py-3 text-right">{row.before}</td>
                  <td className="py-3 text-right text-neutral-600">--</td>
                  <td className="py-3 text-right text-neutral-600">--</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      <button
        onClick={() => onTabChange('overview')}
        className="text-sm font-medium text-neutral-400 hover:text-white transition-colors mt-10"
      >
        Back to Overview
      </button>
    </div>
  );
}
