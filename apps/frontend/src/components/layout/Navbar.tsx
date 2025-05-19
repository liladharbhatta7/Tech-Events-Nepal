'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const pathname = usePathname();

  // Dynamically import Bootstrap JS on the client
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const toggleNav = () => setIsNavCollapsed((prev) => !prev);

  const isActive = (path: string) => pathname === path ? 'active' : '';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          Tech Events Nepal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navMenu"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`}
          id="navMenu"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/events" className={`nav-link ${isActive('/events')}`}>
                Events
              </Link>
            </li>

            {/* Community */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="communityDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community
              </a>
              <ul className="dropdown-menu" aria-labelledby="communityDropdown">
                <li>
                  <Link href="/community/forums" className="dropdown-item">
                    Forums
                  </Link>
                </li>
                <li>
                  <Link href="/community/teammates" className="dropdown-item">
                    Find Teammates
                  </Link>
                </li>
              </ul>
            </li>

            {/* Resources */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li>
                  <Link href="/blog" className="dropdown-item">
                    Blog & Articles
                  </Link>
                </li>
                <li>
                  <Link href="/community/courses" className="dropdown-item">
                    Online Courses
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/sponsor" className={`nav-link ${isActive('/sponsor')}`}>
                Sponsorships
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${isActive('/about')}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${isActive('/contact')}`}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/create_event"
                className={`nav-link ${isActive('/create_event')}`}
              >
                Create Event
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link href="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link href="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
