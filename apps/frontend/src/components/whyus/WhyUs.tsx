'use client';
import React from 'react';
import {
  BiShieldAlt2,
  BiBadgeCheck,
  BiWorld,
  BiUserVoice,
} from 'react-icons/bi';

const reasons = [
  { icon: BiShieldAlt2, title: 'Secure Payments', desc: 'Multiple trusted options.' },
  { icon: BiBadgeCheck, title: 'Verified Hosts', desc: 'High-quality organizers only.' },
  { icon: BiWorld, title: 'Local & Global', desc: 'Events near you & worldwide.' },
  { icon: BiUserVoice, title: 'Active Community', desc: 'Join a vibrant network.' },
];

export default function WhyUs() {
  return (
    <section className="why-us-section py-5">
      <div className="container">
        <h2 className="section-title mb-5 text-center">Why Choose TechEvents?</h2>
        <div className="row g-4">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="col-md-3">
              <div className="feature-card p-4 text-center position-relative">
                <div className="icon-wrapper mb-4">
                  <Icon className="feature-icon" />
                </div>
                <h3 className="feature-title mb-3">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-us-section {
          background: linear-gradient(45deg, #0F0120, #1E0344);
          position: relative;
          overflow: hidden;
        }
        
        .section-title {
          color: #F5F3FF;
          font-weight: 700;
          font-size: 2.25rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .feature-card {
          background: rgba(26, 3, 51, 0.4);
          border: 1px solid rgba(168, 139, 255, 0.15);
          border-radius: 1rem;
          backdrop-filter: blur(6px);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          min-height: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(123, 97, 255, 0.2);
          background: rgba(42, 24, 71, 0.5);
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(90, 66, 147, 0.3);
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-wrapper {
          background: rgba(110, 71, 161, 0.5);
          transform: scale(1.1);
        }

        .feature-icon {
          color: #A6E3FE;
          font-size: 2.5rem;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.15);
          filter: drop-shadow(0 2px 6px rgba(166, 227, 254, 0.3));
        }

        .feature-title {
          color: #F5F3FF;
          font-size: 1.25rem;
          font-weight: 600;
          position: relative;
        }

        .feature-desc {
          color: rgba(245, 243, 255, 0.85);
          font-size: 0.95rem;
          line-height: 1.5;
          max-width: 200px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
}