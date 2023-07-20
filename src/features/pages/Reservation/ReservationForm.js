import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MenuButton, BackButton } from "../../../components";
import { Button } from "flowbite-react";
import { PiCaretCircleRightLight } from "react-icons/pi";
import { format } from 'date-fns';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../../components";
import { authSelector, setAuthToken } from "../../storeSlice/authSlice";
import toast from "react-hot-toast";

const ReservationForm = () => {
  const navigate = useNavigate();
  const [concerts, setConcerts] = useState([]);
  const [selectedConcert, setSelectedConcert] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [concertDetails, setConcertDetails] = useState(null);
  const [selectedConcertHall, setSelectedConcertHall] = useState(null); 
  const [reservationStatus, setReservationStatus] = useState(null);


  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'MMM dd yyyy hh:mm a'); 
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/concerts")
      .then((response) => response.json())
      .then((data) => setConcerts(data))
      .catch((error) => console.error("Error fetching concerts:", error));
  }, []);

  const fetchConcertDetails = (concertId) => {
    fetch(`http://localhost:3000/api/v1/concerts/${concertId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched concert details:", data);
        setConcertDetails(data);
        if (data.concert_halls && data.concert_halls.length > 0) {
          setSelectedCity(data.concert_halls[0].city);
        }
      })
      .catch((error) => console.error("Error fetching concert details:", error));
  };

 const handleConcertChange = (selectedConcertName) => {
  const selectedConcertData = concerts.find((concert) => concert.name === selectedConcertName);
  if (selectedConcertData) {
    setSelectedConcert(selectedConcertData);
    setSelectedCity(""); 
    fetchConcertDetails(selectedConcertData.id); 

    setValue("concert_name", selectedConcertData.name);
    setValue("description", concertDetails?.description || "");
    setValue("artist", concertDetails?.artist || "");
    setValue("band_name", concertDetails?.band || "");
  }
};

  const handleCityChange = (selectedCityName) => {
    setSelectedCity(selectedCityName);
    const selectedConcertHall = concertDetails?.concert_halls.find(
      (hall) => hall.city_name === selectedCityName
    );
    if (selectedConcertHall) {
      setValue("concert_hall_id", selectedConcertHall.id);
      console.log("Selected concert hall:", selectedConcertHall);
      setSelectedConcertHall(selectedConcertHall);
    }
  };

  const { currentUser } = useSelector(authSelector);
  const userId = currentUser ? currentUser.id : null;
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.token);
  const onSubmit = async (formData, event) => {
    event.preventDefault();
  
    try {
      if (!userId) {
        console.error("User ID not available. Please check authentication.");
        return;
      }
      const reservationData = {
        user_id: userId,
        concert_hall_id: selectedConcertHall.id, 
        ...formData,
      };
       dispatch(setAuthToken(authToken));
  
       if (!selectedConcertHall) {
        console.error("Concert hall not found with the selected city name:", selectedCity);
        return;
      }
      const response = await fetch("http://localhost:3000/api/v1/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, 
        },
        body: JSON.stringify(reservationData), 
      });

      if (response.status === 201) {
        console.log("Reservation created successfully!");
        setReservationStatus("success");
      } else {
        console.error("Failed to create reservation:", response.statusText);
        setReservationStatus("error");
      }
    } catch (error) {
      console.error("Reservation failed:", error);
      setReservationStatus("error");
    }
  };
  
  const errorBorder = (field) => {
    return errors[field]
      ? "!border-red-500 !focus:ring-red-500 !focus:border-red-500 !placeholder-red-700"
      : "border-gray-300 focus:ring-primaryGreen focus:border-primaryGreen";
  };

  useEffect(() => {
    if (reservationStatus === "success") {
      navigate("/home");
      toast.success("You successfully made a reservation", {
				position: "top-center",
				duration: 4000,
			});
    }
  }, [reservationStatus]);

  return (
    <div className="relative w-full h-screen px-5 md:px-20">
      <h1 className="flex items-center text-3xl font-extrabold tracking-wide md:tracking-widest md:text-2xl gap-x-3">
        <MenuButton></MenuButton>
        RESERVE CONCERT
      </h1> 
     <div className="flex flex-col items-center h-full py-10 text-center md:justify-center md:py-0">
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-group">
        <label htmlFor="concert_name" className="block mb-2 text-sm font-medium text-left text-gray-900">
          Name of Concert
        </label>
        <select
          id="concert_name"
          className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50 ${errorBorder(
            "concert_name"
          )}`}
          required
          value={selectedConcert?.name || ""}
          onChange={(e) => handleConcertChange(e.target.value)}
        >
          <option value="" disabled>
            Select Concert
          </option>
          {concerts.map((concert) => (
            <option key={concert.id} value={concert.name}>
              {concert.name}
            </option>
          ))}
        </select>
        <ErrorMessage error={errors} field="concert_name" />
      </div>
          {selectedConcert && (
            <>
              <div className="form-group">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-left text-gray-900">
                  Concert Details
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border ${errorBorder(
                    "description"
                  )}`}
                  placeholder="Write your thoughts here..."
                  required
                  readOnly
                  value={concertDetails?.description || ""}
                ></textarea>

                <ErrorMessage error={errors} field="description" />
              </div>

                
        <div className="grid grid-cols-1 gap-5 form-group sm:grid-cols-1 md:grid-cols-2">
          <section>
            <label htmlFor="artist" className="block mb-2 text-sm font-medium text-left text-gray-900">
              Name of Artist
            </label>
            <input
              type="text"
              id="artist"
              className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50 ${errorBorder(
                'artist'
              )}`}
              placeholder="Taylor Swift"
              required
              readOnly
              value={concertDetails?.artist || ''}
            />
            <ErrorMessage error={errors} field="artist" />
          </section>

          <section>
            <label htmlFor="band_name" className="block mb-2 text-sm font-medium text-left text-gray-900">
              Band Name
            </label>
            <input
              type="text"
              id="band_name"
              className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50 ${errorBorder(
                'band_name'
              )}`}
              placeholder="Swift Band"
              required
              readOnly
              value={concertDetails?.band || ''}
            />
            <ErrorMessage error={errors} field="band_name" />
          </section>
        </div>
              <div className="mb-5">
                <label htmlFor="city_name" className="block mb-2 text-sm font-medium text-left text-gray-900">
                  Select City
                </label>
                <select
                  id="city_name"
                  className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50 ${errorBorder(
                    "city",
                    0
                  )}`}
                  value={selectedCity}
                  onChange={(e) => handleCityChange(e.target.value)}
                >
                  <option value="" disabled>
                    Select City
                  </option>
                  {concertDetails &&
                    concertDetails.concert_halls.map((hall) => (
                      <option key={hall.id} value={hall.city_name}>
                        {hall.city_name}
                      </option>
                    ))}
                </select>
                <ErrorMessage error={errors} field="city" />
                
              </div>
            </>
          )}

          {selectedCity && (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Concert Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Hall Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      City Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Seats
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Reserved Seats
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Event Date & Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {concertDetails &&
                    concertDetails.concert_halls.map((hall, index) => (
                      <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4">{concertDetails.name}</td>
                        <td className="px-6 py-4">{hall.hall_name}</td>
                        <td className="px-6 py-4">{hall.city_name}</td>
                        <td className="px-6 py-4">{hall.total_seats}</td>
                        <td className="px-6 py-4">{hall.reserved_seats}</td>
                        <td className="px-6 py-4">{formatDate(hall.date)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          <Button type="submit" className="bg-primaryGreen py-[0.3rem] hover:!bg-lime-600 px-4 mt-4" pill>
            <p className="text-[0.79rem]">Reserve</p>
            <PiCaretCircleRightLight className="w-6 h-6 ml-3" />
          </Button>
        </form>
        {reservationStatus === "success" && (
        <div className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-80 flex items-center justify-center">
          <p className="text-white text-2xl font-bold">Reservation Successful!</p>
        </div>
      )}
      {reservationStatus === "error" && (
        <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-80 flex items-center justify-center">
          <p className="text-white text-2xl font-bold">Reservation Failed. Please try again.</p>
        </div>)}
      </div>
      <BackButton></BackButton>
    </div>
  );
};

export default ReservationForm;
