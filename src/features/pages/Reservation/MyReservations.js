import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { MenuButton, BackButton } from '../../../components';
import Sidebar from '../../app/Sidebar';
import { fetchAllUserReservations } from '../../../services/services';

const MyReservations = () => {
  const [userReservations, setUserReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prevOpen) => !prevOpen);
  };

  const authToken = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.currentUser?.id);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'MMM dd yyyy hh:mm a');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userId || !authToken) {
          toast.error('User ID or Auth Token not available. Please check authentication.');
          return;
        }

        const data = await fetchAllUserReservations(authToken);

        if (data) {
          setUserReservations(data.reservations);
        } else {
          setError('Failed to fetch reservations.');
        }
      } catch (error) {
        setError('Error fetching reservations.');
      } finally {
        setLoading(false);
      }
    };

    if (userId && authToken) {
      fetchData();
    }
  }, [userId, authToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen px-5 md:px-10">
      <h1 className="flex items-center text-3xl font-extrabold tracking-wide md:tracking-widest md:text-2xl gap-x-3">
        <MenuButton onClick={toggleSidebar} />
      </h1>
      {isSidebarOpen && <Sidebar />}
      <div className="px-5 py-10 md:px-20">
        <h1 className="mb-6 text-3xl font-extrabold tracking-wide md:tracking-widest md:text-2xl">My Reservations</h1>
        {Array.isArray(userReservations) && userReservations.length === 0 ? (
          <p>No reservations found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {userReservations.map((reservation) => (
              <div key={reservation.id} className="bg-white rounded-lg shadow-md p-4">
                <p className="text-lg font-semibold">{reservation.concert.name}</p>
                <p className="text-gray-600">
                  Concert Date: &nbsp;
                  {formatDate(reservation.concert.date)}
                </p>
                <p className="text-gray-600">
                  Concert Hall:&nbsp;
                  {reservation.concert_hall.name}
                </p>
                <p className="text-gray-600">
                  City:&nbsp;
                  {reservation.city.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <BackButton />
    </div>
  );
};

export default MyReservations;
