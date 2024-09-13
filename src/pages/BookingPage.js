// src/pages/BookingPage.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SeatSelection from '../components/bookings/SeatSelection';
import BookingForm from '../components/bookings/BookingForm';
import './BookingPage.css'; // Подключаем файл стилей

const BookingPage = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleBooking = (e) => {
    e.preventDefault();
    // Логика бронирования
    console.log('Booking confirmed for seats:', selectedSeats);
  };

  return (
    <div className="booking-page">
      <h2>Select Your Seats</h2>
      <SeatSelection selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      {selectedSeats.length > 0 && <BookingForm handleBooking={handleBooking} />}
    </div>
  );
};

export default BookingPage;
