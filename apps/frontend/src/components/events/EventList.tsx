'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import EventCard from './EventCard';

export interface Event {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    date: string;
    location: string;
  };
}

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/api/events?populate=*')
      .then((res) => {
        setEvents(res.data.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading events…</p>;
  if (!events.length)
    return <p className="text-center">No upcoming events found.</p>;

  return (
    <div className="row">
      {events.map((evt) => (
        <div key={evt.id} className="col-md-6 mb-4">
          <EventCard
            event={{
              id: evt.id,
              title: evt.attributes.title,
              date: evt.attributes.date,
              location: evt.attributes.location,
              description: evt.attributes.description,
              slug: evt.attributes.slug,
            }}
          />
        </div>
      ))}
    </div>
  );
}
