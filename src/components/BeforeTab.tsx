import { useState } from 'react';
import { stats } from '../data/stats';
import { screenshots } from '../data/screenshots';
import Card from './Card';
import Lightbox from './Lightbox';

export default function BeforeTab() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div>
      {/* Financial snapshot */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-1">Before state</h2>
        <p className="text-sm text-neutral-500 mb-6">Your financial position before the recode.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
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

      {/* Current account structure */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-1">Current account structure</h2>
        <p className="text-sm text-neutral-500 mb-6">Revenue accounts as currently configured in Fergus and Xero.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-3">Commercial (181 series)</p>
            <div className="space-y-2">
              {[
                { code: '181 01', name: 'Labour', value: '$518,523' },
                { code: '181 02', name: 'Materials', value: '$556,651', flag: true },
                { code: '181 03', name: 'Sanitary ware', value: '$69,488' },
                { code: '181 04', name: 'Travel charge', value: '$31,829', flag: true },
              ].map((acc) => (
                <div key={acc.code} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-600 font-mono">{acc.code}</span>
                    <span className="text-xs text-neutral-300">{acc.name}</span>
                    {acc.flag && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                  </div>
                  <span className="text-xs text-white font-medium">{acc.value}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-3">Residential (180 series)</p>
            <div className="space-y-2">
              {[
                { code: '180 01', name: 'Labour', value: '$65,205' },
                { code: '180 02', name: 'Materials', value: 'Included above', flag: true },
                { code: '180 03', name: 'Sanitary ware', value: 'Included above' },
                { code: '180 04', name: 'Travel charge', value: 'Included above', flag: true },
              ].map((acc) => (
                <div key={acc.code} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-600 font-mono">{acc.code}</span>
                    <span className="text-xs text-neutral-300">{acc.name}</span>
                    {acc.flag && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                  </div>
                  <span className="text-xs text-neutral-500">{acc.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <p className="text-[11px] text-neutral-600 mt-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" /> Flagged for reclassification
        </p>
      </section>

      {/* Xero screenshots */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-1">Xero snapshots</h2>
        <p className="text-sm text-neutral-500 mb-6">Screenshots captured from your Xero account before any changes were made. Click to enlarge.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {screenshots.map((s) => (
            <Card
              key={s.id}
              className="p-3 cursor-pointer hover:-translate-y-1 transition-transform border border-neutral-800"
              onClick={() => setLightboxSrc(s.src)}
            >
              <img
                src={s.src}
                alt={s.title}
                className="w-full rounded-lg mb-2"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
              />
              <p className="text-xs font-medium text-neutral-300">{s.title}</p>
              <p className="text-[11px] text-neutral-500">{s.subtitle}</p>
            </Card>
          ))}
        </div>
      </section>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  );
}
