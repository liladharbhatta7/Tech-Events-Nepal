'use client';
import React from 'react';
import Link from 'next/link';

export default function HelpSection() {
  return (
    <section id="help" className="help-section py-5">
      <div className="container">
        <div className="help-content mx-auto">
          <h3 className="help-title mb-4">Need Help or Have Questions?</h3>
          <p className="help-text mb-4">Visit our Help Center or reach out directly.</p>
          <Link 
            href="/help" 
            className="help-button"
          >
            Go to Help Center
          </Link>
        </div>
      </div>

      <style jsx>{`
        .help-section {
          background: linear-gradient(45deg, #1E0344, #0F0120);
          border-top: 1px solid rgba(168, 139, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .help-content {
          max-width: 800px;
          padding: 2.5rem;
          background: rgba(26, 3, 51, 0.4);
          border-radius: 1rem;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(168, 139, 255, 0.15);
        }

        .help-title {
          color: #F5F3FF;
          font-weight: 700;
          font-size: 2rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .help-text {
          color: rgba(245, 243, 255, 0.85);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .help-button {
          background: linear-gradient(45deg, #2DD4BF 0%, #0EA5E9 100%);
          color: #1A0333 !important;
          border: none;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(45, 212, 191, 0.3);
          box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
        }

        .help-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(14, 165, 233, 0.3);
          background: linear-gradient(45deg, #34E0C2 0%, #1EB8FF 100%);
        }

        .help-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 25%,
            rgba(255,255,255,0.15) 50%,
            transparent 75%
          );
          animation: shine 3s infinite;
        }

        @keyframes shine {
          100% {
            left: 200%;
          }
        }
      `}</style>
    </section>
  );
}