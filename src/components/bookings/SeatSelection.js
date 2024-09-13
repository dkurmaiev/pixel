// src/components/bookings/SeatSelection.js

import React from 'react';
import './SeatSelection.css'; // Подключаем файл стилей

const SeatSelection = ({ selectedSeats, setSelectedSeats }) => {
  const seats = Array.from({ length: 50 }, (_, i) => `Seat-${i + 1}`);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seat-selection">
      {seats.map(seat => (
        <button
          key={seat}
          className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
          onClick={() => toggleSeat(seat)}
        >
          {seat}
        </button>
      ))}
    </div>
  );
};

export default SeatSelection;
