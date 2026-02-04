import { useState, useCallback } from 'react';
import WelcomePage from './components/WelcomePage';
import DashboardPage from './components/DashboardPage';

type Page = 'welcome' | 'dashboard';

export default function App() {
  const [page, setPage] = useState<Page>('welcome');
  const [transitioning, setTransitioning] = useState(false);

  const handleEnter = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setPage('dashboard');
      setTransitioning(false);
      window.scrollTo(0, 0);
    }, 400);
  }, []);

  return (
    <div className="min-h-screen">
      {page === 'welcome' && (
        <div
          className="transition-opacity duration-400 ease-out"
          style={{ opacity: transitioning ? 0 : 1 }}
        >
          <WelcomePage onEnter={handleEnter} />
        </div>
      )}
      {page === 'dashboard' && (
        <div className="animate-[pageIn_0.5s_ease-out]">
          <style>{`
            @keyframes pageIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
          <DashboardPage />
        </div>
      )}
    </div>
  );
}
