'use client';

import React from 'react';
import EventCard from '../events/EventCard';
import { Event } from '../events/EventList';

interface Props { events: Event[]; }

export default function FeaturedEvents({ events }: Props) {
  return (
    <section id="events" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Upcoming Events</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {events.map((evt) => (
            <div key={evt.id} className="col">
              <EventCard event={evt} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/events" className="btn btn-primary">Browse All Events</a>
        </div>
      </div>
    </section>
  );
}
