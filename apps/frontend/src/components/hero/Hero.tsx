'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="hero text-center py-5 mb-5"
      style={{
        background: "url('https://source.unsplash.com/1600x600/?technology,event') center/cover no-repeat",
        position: 'relative',
        color: 'white'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
      <div className="container position-relative text-white">
        <h1 className="display-4 fw-bold">Discover Tech Events Near You</h1>
        <p className="lead mb-4">Workshops, Meetups, Conferences &amp; More</p>
        <div className="d-flex justify-content-center gap-2 mb-3">
          <Link href="/events" className="btn btn-primary btn-lg">Browse Events</Link>
          <Link href="/organizer/dashboard/events/create" className="btn btn-outline-light btn-lg">Create Event</Link>
        </div>
        <form className="d-flex justify-content-center">
          <input className="form-control w-50 me-2" type="search" placeholder="Search events..." />
          <button className="btn btn-light">Search</button>
        </form>
      </div>
    </section>
  );
}
