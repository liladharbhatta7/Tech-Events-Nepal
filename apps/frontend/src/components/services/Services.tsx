'use client';
import React from 'react';
import Link from 'next/link';
import {
  BiGroup,
  BiBookAlt,
  BiNotepad,
  BiPackage,
} from 'react-icons/bi';

const services = [
  { icon: BiGroup,    title: 'Community Forums', desc: 'Ask questions & find teammates.', href: '/community/forums' },
  { icon: BiBookAlt,  title: 'Online Courses',   desc: 'Curated tech learning paths.',   href: '/community/courses' },
  { icon: BiNotepad,  title: 'Blog & Articles',  desc: 'Insights, tutorials & recaps.',  href: '/blog' },
  { icon: BiPackage,  title: 'Sponsorships',     desc: 'Partner with us & gain visibility.', href: '/sponsor' },
];

const bgColors = [
  '#2A1847',  // Deep cosmic purple
  '#321D55',  // Royal nebula
  '#3B2365',  // Galactic indigo
  '#442A76',  // Dark orchid
];

export default function Services() {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <h2 className="services-title mb-4 text-center">More From TechEvents</h2>
        <div className="row text-center g-4">
          {services.map(({ icon: Icon, title, desc, href }, idx) => (
            <div key={title} className="col-md-3">
              <Link href={href} className="card-link">
                <div
                  className="service-card h-100 p-4 d-flex flex-column align-items-center position-relative"
                  style={{ backgroundColor: bgColors[idx % bgColors.length] }}
                >
                  <div className="icon-wrapper mb-3"><Icon /></div>
                  <h5 className="service-title">{title}</h5>
                  <p className="service-desc">{desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background-color: #1A0333;
          background: linear-gradient(45deg, #0F0120, #1E0344);
        }
        .services-title {
          color: #F5F3FF;
          font-weight: 700;
          font-size: 2.25rem;
          letter-spacing: -0.5px;
        }
        .service-card {
          border: 1px solid rgba(168, 139, 255, 0.15);
          border-radius: 1rem;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
          backdrop-filter: blur(4px);
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(90, 66, 147, 0.4) 0%, 
            rgba(42, 24, 71, 0.6) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 32px rgba(123, 97, 255, 0.25);
        }
        .service-card:hover::before {
          opacity: 1;
        }
        .icon-wrapper :global(svg) {
          font-size: 2.75rem;
          color: #A6E3FE; /* Light sky color */
          filter: drop-shadow(0 2px 6px rgba(166, 227, 254, 0.2));
          transition: transform 0.3s ease;
        }
        .service-card:hover .icon-wrapper :global(svg) {
          transform: scale(1.15);
        }
        .service-title {
          color: #F5F3FF;
          font-weight: 600;
          position: relative;
          z-index: 1;
        }
        .service-desc {
          color: rgba(245, 243, 255, 0.85);
          font-weight: 300;
          line-height: 1.5;
          position: relative;
          z-index: 1;
        }
        .card-link:hover {
          text-decoration: none;
        }
      `}</style>
    </section>
  );
}