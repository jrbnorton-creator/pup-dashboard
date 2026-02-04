import Card from './Card';
import { stats } from '../data/stats';
import { issues } from '../data/issues';

export default function OverviewTab() {
  return (
    <div>
      {/* Performance summary */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-1">Performance summary</h2>
        <p className="text-sm text-neutral-500 mb-6">Key figures from your Xero account, 1 April 2025 to 31 January 2026.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <Card key={s.label} className="p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-1">{s.label}</p>
              <p className="text-2xl font-semibold text-white">{s.value}</p>
              <p className={`text-xs mt-1 ${s.footnoteType === 'warning' ? 'text-amber-400' : 'text-neutral-500'}`}>
                {s.footnote}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Revenue breakdown */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-1">Revenue breakdown</h2>
        <p className="text-sm text-neutral-500 mb-6">Trading income by category.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { label: 'Labour (Commercial)', value: '$518,523', pct: '41.8%' },
            { label: 'Materials', value: '$556,651', pct: '44.8%' },
            { label: 'Sanitary ware', value: '$69,488', pct: '5.6%' },
            { label: 'Labour (Residential)', value: '$65,205', pct: '5.3%' },
            { label: 'Travel charges', value: '$31,829', pct: '2.6%' },
          ].map((item) => (
            <Card key={item.label} className="p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-1">{item.label}</p>
              <p className="text-lg font-semibold text-white">{item.value}</p>
              <p className="text-xs text-neutral-500 mt-1">{item.pct} of revenue</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Key findings */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-1">Key findings</h2>
        <p className="text-sm text-neutral-500 mb-6">Issues identified during our review.</p>

        <div className="space-y-3">
          {issues.map((issue) => {
            const dot = issue.severity === 'high' ? 'bg-red-500' : issue.severity === 'medium' ? 'bg-amber-400' : 'bg-neutral-500';
            return (
              <Card key={issue.title} className="p-4">
                <div className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${dot}`} />
                  <div>
                    <p className="text-sm font-medium text-white mb-1">{issue.title}</p>
                    <p className="text-xs text-neutral-400 leading-relaxed">{issue.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Bottom line */}
      <section className="mb-12">
        <Card className="p-6 border-neutral-700">
          <h3 className="text-lg font-semibold text-white mb-3">The bottom line</h3>
          <p className="text-sm text-neutral-300 leading-relaxed mb-3">
            Your reported net profit of $180,878 is based on a general ledger with materials account pollution. Once we restructure the chart of accounts and fix the Fergus-to-Xero mapping, the true picture will be clearer, and your cost of sales breakdown will be reliable for the first time.
          </p>
          <p className="text-xs text-neutral-500 leading-relaxed">
            The recode work will also fix travel charge classification, verify sanitary ware routing, and establish a proper COGS structure. We'll cover the full scope in your review session.
          </p>
        </Card>
      </section>

      {/* Balance sheet snapshot */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-1">Balance sheet snapshot</h2>
        <p className="text-sm text-neutral-500 mb-6">As at 31 January 2026.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Total assets', value: '$486,166' },
            { label: 'Total liabilities', value: '$210,361' },
            { label: 'Net assets', value: '$275,805' },
            { label: 'Accounts receivable', value: '$204,390' },
          ].map((item) => (
            <Card key={item.label} className="p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-1">{item.label}</p>
              <p className="text-2xl font-semibold text-white">{item.value}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
