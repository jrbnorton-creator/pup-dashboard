import Card from './Card';

const ACTION_ITEMS = [
  {
    number: 1,
    title: 'Restructure materials GL accounts',
    description:
      'Create COGS sub-accounts (5200-5215) by material type for both commercial and residential streams. This is the foundation for everything else.',
    status: 'Action required',
    statusColor: 'text-amber-400',
  },
  {
    number: 2,
    title: 'Fix travel charge classification',
    description:
      'Move travel charges from revenue accounts to expense/cost recovery accounts. Create 6100/6101 for travel costs and 6200/6201 for travel recovery.',
    status: 'Action required',
    statusColor: 'text-amber-400',
  },
  {
    number: 3,
    title: 'Update Fergus material type codes',
    description:
      'Implement material type tagging in Fergus (MAT_LABOR, MAT_SANITARY, MAT_PLUMB, MAT_CONS, MAT_STOCK, MAT_OTHER) so the Xero sync can route to the correct GL accounts.',
    status: 'Pending decision',
    statusColor: 'text-neutral-400',
  },
  {
    number: 4,
    title: 'Review session after recode',
    description:
      'Once the account restructure and reclassification are complete, we will walk through the cleaned financials, verify the new GL structure, and discuss ongoing processes.',
    status: 'Scheduled',
    statusColor: 'text-neutral-400',
  },
];

export default function MapTab() {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-1">What's next</h2>
        <p className="text-sm text-neutral-500 mb-8">The key actions coming out of this review.</p>

        <div className="space-y-4">
          {ACTION_ITEMS.map((item) => (
            <Card key={item.number} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-white">{item.number}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <span className={`text-xs font-medium ${item.statusColor}`}>{item.status}</span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <Card className="p-8 text-center border-neutral-700">
          <p className="text-sm text-neutral-300 mb-2">Ready to book your review session?</p>
          <p className="text-xs text-neutral-500 mb-4">We'll go through the audit findings, restructured accounts, and implementation plan together.</p>
          <a
            href="#CALENDLY_LINK"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Book a session
            <svg fill="none" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </a>
        </Card>
      </section>
    </div>
  );
}
