import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './features';
import useFetchReservations from './hooks/useFetchReservations';

function App() {
  const [fetchReservations] = useFetchReservations();

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  return (
    <div className="App">
      <Sidebar />
      <main className="ml-0 md:ml-56">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
