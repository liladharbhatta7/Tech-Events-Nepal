import React from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{event.location}</h6>
        <p className="card-text">{event.description}</p>
        <p className="card-text">
          <small className="text-muted">📅 {event.date}</small>
        </p>
      </div>
    </div>
  );
};

export default EventCard;
