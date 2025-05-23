'use client';

import React from 'react';
import EventCard from '../events/EventCard';
import { Event } from '../events/EventList';

interface Props {
  events: Event[];
}

export default function FeaturedEvents({ events }: Props) {
  return (
    <section id="events" className="featured-section py-5">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Upcoming Events</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {events.map((evt) => (
            <div key={evt.id} className="col">
              <EventCard event={evt} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/events" className="btn browse-btn">
            Browse All Events
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Background: light tint of deep purple */
        .featured-section {
          background-color: rgba(34, 16, 53, 0.12);
        }

        /* Title: soft brightened purple for contrast */
        .section-title {
          color: #CBB3F8;
          font-weight: 600;
          font-size: 2rem;
        }

        /* CTA Button: electric yellow on purple */
        .browse-btn {
          display: inline-block;
          background-color: #FFE600;
          border: 2px solid #FFE600;
          color: #2D0A4B;
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .browse-btn:hover {
          background-color: #E6D100;
          transform: translateY(-2px);
          color: #2D0A4B;
        }

        /* Card Styling: muted white with soft lavender shadow */
        .row .col :global(.card) {
          background-color: #FDF9FF;
          border: 1px solid rgba(203, 179, 248, 0.2);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.06);
          border-radius: 0.75rem;
          transition: box-shadow 0.3s ease;
        }

        .row .col :global(.card:hover) {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
}
