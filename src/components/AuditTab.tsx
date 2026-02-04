import Card from './Card';
import { auditFindings, auditSummary } from '../data/audit';

const severityConfig = {
  critical: { dot: 'bg-red-500', label: 'Critical', labelClass: 'text-red-400 bg-red-500/10 border border-red-500/20' },
  warning: { dot: 'bg-amber-400', label: 'Warning', labelClass: 'text-amber-400 bg-amber-400/10 border border-amber-400/20' },
  info: { dot: 'bg-blue-400', label: 'Info', labelClass: 'text-blue-400 bg-blue-400/10 border border-blue-400/20' },
  pass: { dot: 'bg-green-500', label: 'Pass', labelClass: 'text-green-400 bg-green-500/10 border border-green-500/20' },
};

export default function AuditTab() {
  return (
    <div>
      {/* Audit summary */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-1">Fergus audit</h2>
        <p className="text-sm text-neutral-500 mb-6">
          Comprehensive review of the Fergus-to-Xero integration, chart of accounts, and bookkeeping processes.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <Card className="p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-1">Total findings</p>
            <p className="text-2xl font-semibold text-white">{auditSummary.totalFindings}</p>
          </Card>
          <Card className="p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-1">Critical</p>
            <p className="text-2xl font-semibold text-red-400">{auditSummary.critical}</p>
          </Card>
          <Card className="p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-1">Warnings</p>
            <p className="text-2xl font-semibold text-amber-400">{auditSummary.warnings}</p>
          </Card>
          <Card className="p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-1">Passed</p>
            <p className="text-2xl font-semibold text-green-400">{auditSummary.passed}</p>
          </Card>
        </div>

        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-red-500" style={{ width: `${(auditSummary.critical / auditSummary.totalFindings) * 100}%` }} />
                <div className="h-full bg-amber-400" style={{ width: `${(auditSummary.warnings / auditSummary.totalFindings) * 100}%` }} />
                <div className="h-full bg-green-500" style={{ width: `${(auditSummary.passed / auditSummary.totalFindings) * 100}%` }} />
              </div>
            </div>
            <p className="text-[11px] text-neutral-500 shrink-0">{auditSummary.source}</p>
          </div>
        </Card>
      </section>

      {/* Findings */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-1">Findings</h2>
        <p className="text-sm text-neutral-500 mb-6">Each finding includes a recommendation for resolution.</p>

        <div className="space-y-4">
          {auditFindings.map((finding) => {
            const config = severityConfig[finding.severity];
            return (
              <Card key={finding.id} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-[linear-gradient(135deg,rgba(24,34,51,0.8)_0%,rgba(36,48,67,0.5)_100%)] border border-base-700/80">
                    <span className="text-xs font-semibold text-text-muted">{finding.id}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-sm font-medium text-white">{finding.title}</h3>
                      <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded shrink-0 ${config.labelClass}`}>
                        {config.label}
                      </span>
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-600 mb-1.5">{finding.category}</p>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-3">{finding.detail}</p>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent mb-1">Recommendation</p>
                      <p className="text-xs text-neutral-300 leading-relaxed">{finding.recommendation}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Scope */}
      <section className="mb-12">
        <Card className="p-6 border-neutral-700">
          <h3 className="text-lg font-semibold text-white mb-3">Audit scope</h3>
          <p className="text-sm text-neutral-300 leading-relaxed mb-3">
            This audit covered the Fergus platform configuration, Xero integration settings, invoice templates, job costing structure, chart of accounts, and tax compliance. Findings are based on live system inspection and transaction sampling.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Fergus > Xero sync', 'Chart of accounts', 'Invoice templates', 'Job costing', 'Tax & compliance'].map((scope) => (
              <span key={scope} className="text-[10px] font-medium px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                {scope}
              </span>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
