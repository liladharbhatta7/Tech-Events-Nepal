'use client';
import React from 'react';
import Link from 'next/link';
import { 
  BiEnvelope,
  BiPhone,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram
} from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="row g-4">
            {/* About Column */}
            <div className="col-md-3">
              <h5 className="footer-heading">TechEvents</h5>
              <p className="footer-text">
                Connecting tech enthusiasts with premier events and learning opportunities.
              </p>
              <div className="social-links">
                <a href="#" className="social-icon"><BiLogoFacebook /></a>
                <a href="#" className="social-icon"><BiLogoTwitter /></a>
                <a href="#" className="social-icon"><BiLogoLinkedin /></a>
                <a href="#" className="social-icon"><BiLogoInstagram /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-3">
              <h5 className="footer-heading">Resources</h5>
              <ul className="footer-links">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="col-md-3">
              <h5 className="footer-heading">Connect</h5>
              <ul className="footer-links">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/sponsors">Sponsors</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3">
              <h5 className="footer-heading">Contact</h5>
              <div className="contact-info">
                <p><BiEnvelope /> info@techevents.com</p>
                <p><BiPhone /> +1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <small className="copyright">
              © {new Date().getFullYear()} TechEvents Nepal. All rights reserved.
            </small>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: linear-gradient(45deg, #0F0120, #1E0344);
          border-top: 1px solid rgba(168, 139, 255, 0.1);
          padding: 4rem 0 2rem;
          color: rgba(245, 243, 255, 0.85);
        }

        .footer-heading {
          color: #F5F3FF;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 2px;
          background: #2DD4BF;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: rgba(245, 243, 255, 0.75);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #2DD4BF;
          padding-left: 6px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .social-icon {
          color: #C8B0FF;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #2DD4BF;
          transform: translateY(-3px);
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .footer-text {
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .footer-bottom {
          margin-top: 4rem;
          border-top: 1px solid rgba(168, 139, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
        }

        .copyright {
          color: rgba(245, 243, 255, 0.6);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-content .row > div {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}