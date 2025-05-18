'use client';

import React from 'react';
import EventList from '@/components/events/EventList';

export default function HomePage() {
  return (
    <main className="container py-5">
      <h1 className="mb-4 text-center">🚀 Tech Events Nepal</h1>
      <p className="text-center text-muted mb-5">
        Discover and post amazing tech events happening across Nepal!
      </p>

      {/* EventList will render event cards */}
      <EventList />
    </main>
  );
}
