'use client';

import React from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const EventCard = ({ event }: { event: Event }) => {
  const thumbnail = '/images/hero_img.png';

  return (
    <div className="event-card card h-100">
      <img src={thumbnail} alt={event.title} className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{event.title}</h5>
        <h6 className="card-subtitle mb-1">{event.location}</h6>
        <p className="card-text flex-grow-1">{event.description}</p>
        <p className="card-text date">
          <span>📅</span> {event.date}
        </p>
      </div>

      <style jsx>{`
        .event-card {
          background-color: #F3E8FF;
          border: 1px solid #D1B3FF;
          border-radius: 0.75rem;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .event-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(58, 31, 88, 0.15);
        }
        .card-img-top {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
        .card-body {
          /* reduced bottom padding to tighten the card */
          padding: 0.75rem 1rem 0.5rem;
        }
        .card-title {
          color: #1A0033;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        .card-subtitle {
          color: #6E47A1;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }
        .card-text {
          color: #3C1F58;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        .date {
          color: #1A0033;
          font-size: 0.85rem;
          font-weight: 500;
          margin: 0;      /* zero out bottom margin */
        }
        .date span {
          color: #FFEB00;
          margin-right: 0.4rem;
        }
      `}</style>
    </div>
  );
};

export default EventCard;
