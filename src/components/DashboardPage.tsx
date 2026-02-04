import { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLinkItem } from './ui/Sidebar';
import OverviewTab from './OverviewTab';
import BeforeTab from './BeforeTab';
import AfterTab from './AfterTab';
import AuditTab from './AuditTab';
import DiscussionTab from './DiscussionTab';
import MapTab from './MapTab';
import { LockIcon } from './Icons';

type TabId = 'overview' | 'before' | 'after' | 'audit' | 'discussion' | 'map';

function OverviewIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function BeforeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  );
}

function AfterIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function AuditIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}

function DiscussionIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleTabChange = (tab: TabId) => {
    if (tab === 'after') return;
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs: { id: TabId; label: string; icon: React.ReactNode; locked?: boolean }[] = [
    { id: 'overview', label: 'Overview', icon: <OverviewIcon /> },
    { id: 'before', label: 'Before', icon: <BeforeIcon /> },
    { id: 'after', label: 'After', icon: <AfterIcon />, locked: true },
    { id: 'audit', label: 'Audit', icon: <AuditIcon /> },
    { id: 'discussion', label: 'Discussion', icon: <DiscussionIcon /> },
    { id: 'map', label: 'Map', icon: <MapIcon /> },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
        <SidebarBody className="justify-between">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mb-8 mt-2 shrink-0">
              {sidebarOpen ? (
                <img
                  src="./images/antlab-logo.png"
                  alt="Antlab"
                  className="h-6 brightness-0 invert opacity-80"
                />
              ) : (
                <img
                  src="./images/antlab-logo.png"
                  alt="Antlab"
                  className="h-5 brightness-0 invert opacity-80"
                  style={{ clipPath: 'inset(0 75% 0 0)' }}
                />
              )}
            </div>

            <div className="flex flex-col gap-1">
              {tabs.map((tab) => (
                <div key={tab.id} className="relative">
                  <SidebarLinkItem
                    link={{
                      label: tab.label,
                      icon: tab.locked ? <span className="opacity-40">{tab.icon}</span> : tab.icon,
                      onClick: tab.locked ? undefined : () => handleTabChange(tab.id),
                    }}
                    active={activeTab === tab.id}
                    className={tab.locked ? 'opacity-40 cursor-default' : ''}
                  />
                  {tab.locked && sidebarOpen && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2">
                      <LockIcon className="w-3 h-3 text-neutral-600" />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0 pb-2">
            {sidebarOpen && (
              <div className="text-[10px] text-neutral-600 px-2">
                <p>Antlab Ltd</p>
                <p>Confidential</p>
              </div>
            )}
          </div>
        </SidebarBody>
      </Sidebar>

      <div className="flex-1 overflow-y-auto" style={{ background: '#09090b' }}>
        <header className="sticky top-0 z-50 border-b border-neutral-800 bg-[#09090b]/80 backdrop-blur-xl">
          <div className="px-8 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-neutral-500 text-xs">Advisory</span>
              <span className="text-neutral-700 text-xs">/</span>
              <span className="text-neutral-300 text-xs font-medium">Pumped Up Plumbing Ltd</span>
            </div>
            <span className="text-[11px] text-neutral-500 tracking-wide">February 2026</span>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-8 pb-8">
          <section className="pt-10 pb-6">
            <h1 className="text-3xl font-semibold text-white tracking-tight mb-2">
              Your advisory dashboard
            </h1>
            <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
              A snapshot of your finances, our Fergus integration audit, and items we'd like to discuss in your review session.
            </p>
          </section>

          <section className="mb-10">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500 mb-2">Clean progress</p>
                <p className="text-lg font-semibold text-white">20% Complete</p>
              </div>
              <div className="w-32">
                <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden border border-neutral-700">
                  <div
                    className="h-full rounded-full"
                    style={{ width: '20%', background: '#fff' }}
                  />
                </div>
                <p className="text-[11px] text-neutral-500 mt-2 text-right">
                  Recode in progress
                </p>
              </div>
            </div>
          </section>

          <div key={activeTab} style={{ animation: 'tabFadeIn 0.3s ease-out' }}>
            <style>{`@keyframes tabFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'before' && <BeforeTab />}
            {activeTab === 'after' && <AfterTab onTabChange={handleTabChange} />}
            {activeTab === 'audit' && <AuditTab />}
            {activeTab === 'discussion' && <DiscussionTab />}
            {activeTab === 'map' && <MapTab />}
          </div>
        </main>
      </div>
    </div>
  );
}
