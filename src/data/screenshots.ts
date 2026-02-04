export interface Screenshot {
  id: string;
  src: string;
  title: string;
  subtitle: string;
}

export const screenshots: Screenshot[] = [
  {
    id: 'img-dashboard',
    src: '/images/dashboard.png',
    title: 'Dashboard',
    subtitle: 'Default Xero dashboard view',
  },
  {
    id: 'img-pnl',
    src: '/images/pnl.png',
    title: 'Profit and loss',
    subtitle: '1 April 2025 to 31 January 2026',
  },
  {
    id: 'img-bs',
    src: '/images/bs.png',
    title: 'Balance sheet',
    subtitle: 'As at 31 January 2026',
  },
  {
    id: 'img-tb',
    src: '/images/tb.png',
    title: 'Trial balance',
    subtitle: 'All accounts with YTD movements',
  },
];
