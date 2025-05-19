'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-section text-center py-5 mb-5">
      <div className="overlay" />
      <div className="container position-relative text-white">
        <h1 className="display-4 fw-bold">Discover Tech Events Near You</h1>
        <p className="lead mb-4">Workshops, Meetups, Conferences &amp; More</p>

        <div className="d-flex justify-content-center gap-2 mb-3">
          <Link href="/events" className="btn btn-primary btn-lg">
            Browse Events
          </Link>
          <Link
            href="/organizer/dashboard/events/create"
            className="btn btn-secondary btn-lg"
          >
            Create Event
          </Link>
        </div>

        <form className="d-flex justify-content-center">
          <input
            type="search"
            className="form-control search-input me-2"
            placeholder="Search events..."
          />
          <button type="submit" className="btn search-btn">
            Search
          </button>
        </form>
      </div>

      <style jsx>{`
        /* Hero container & background */
        .hero-section {
          position: relative;
          background: url('/images/hero_img.png')
            center/cover no-repeat;
        }

        /* Semi-opaque overlay using a lighter tint of your purple */
        .overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(58, 31, 88, 0.75); /* purple-tint @75% */
        }

        .hero-section .container {
          position: relative;
          z-index: 1;
        }

        /* Headline & subtitle */
        .display-4 {
          color: rgba(255, 255, 255, 0.95); /* almost-white for less glare */
        }
        .lead {
          color: rgba(255, 255, 255, 0.85); /* softer than headline */
        }

        /* Primary CTA: your electric yellow */
        .btn-primary {
          background-color: #FFEB00;
          border-color: #FFEB00;
          color: #1A0033; /* deep purple text for contrast */
          transition: background 0.2s, transform 0.1s;
        }
        .btn-primary:hover {
          background-color: #E6D700; /* ~10% darker yellow */
          transform: translateY(-1px);
        }

        /* Secondary CTA: a darker shade of your purple */
        .btn-secondary {
          background-color: #3C1F58; /* purple-tint */
          border-color: #3C1F58;
          color: #F5F5F5;
          transition: background 0.2s, transform 0.1s;
        }
        .btn-secondary:hover {
          background-color: #2E1A47; /* purple-deep */
          transform: translateY(-1px);
        }

        /* Search input: clean white with purple border */
        .search-input {
          max-width: 380px;
          background-color: rgba(255, 255, 255, 0.9);
          border: 1px solid #3C1F58; /* purple-tint */
          color: #1A0033;
        }
        .search-input::placeholder {
          color: #7D7D7D; /* mid-gray */
        }

        /* Search button: a light tint of purple for subtlety */
        .search-btn {
          background-color: rgba(58, 31, 88, 0.6); /* purple-tint @60% */
          border: none;
          color: #F5F5F5;
          transition: background 0.2s;
        }
        .search-btn:hover {
          background-color: rgba(58, 31, 88, 0.8);
        }
      `}</style>
    </section>
  );
}
