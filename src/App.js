import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './features';
import useFetchReservations from './hooks/useFetchReservations';

function App() {
  const [fetchReservations] = useFetchReservations();
    const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  return (
    <div className="App">
      {showSidebar && <Sidebar />}
      <main className={showSidebar ? 'ml-0 md:ml-56' : 'ml-0'}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
