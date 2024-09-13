// src/components/bookings/BookingForm.js

import React from 'react';
import './BookingForm.css'; // Подключаем файл стилей

const BookingForm = ({ handleBooking }) => {
  return (
    <form className="booking-form" onSubmit={handleBooking}>
      <button type="submit" className="booking-button">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
