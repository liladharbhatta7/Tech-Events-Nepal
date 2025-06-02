// src/components/layout/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [hasStrapiToken, setHasStrapiToken] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  // status: "loading" | "authenticated" | "unauthenticated"

  // Dynamically import Bootstrap JS on the client
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  // Check localStorage for a Strapi token on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setHasStrapiToken(!!token);
    }
  }, []);

  // Re-check Strapi token whenever the route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setHasStrapiToken(!!token);
    }
  }, [pathname]);

  const isAuthenticated = status === 'authenticated' || hasStrapiToken;

  const toggleNav = () => setIsNavCollapsed(prev => !prev);
  const isActive = (path: string) => (pathname === path ? 'active' : '');

  const handleLogout = async () => {
    // If NextAuth session exists, sign out from NextAuth
    if (status === 'authenticated') {
      await signOut({ callbackUrl: '/' });
      return;
    }

    // Otherwise, remove any Strapi token
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      setHasStrapiToken(false);
    }
    // Redirect to home
    router.replace('/');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link href="/" className="navbar-brand p-0">
            <img
              src="/images/Ten_img.png"
              alt="Tech Events Nepal"
              className="nav-logo"
            />
          </Link>

          <button
            className="navbar-toggler border-0"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard" className="btn btn-outline-light me-2">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="btn btn-outline-primary me-2">
                    Login
                  </Link>
                  <Link href="/signup" className="btn btn-primary">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Global CSS overrides (brand colors, styling) */}
      <style jsx global>{`
        :root {
          --purple-deep:     #1A0033;
          --purple-tint:     #3C1F58;
          --yellow-electric: #FFEB00;
          --white-soft:      #F5F5F5;
          --border-light:    rgba(0, 0, 0, 0.1);
        }

        /* Navbar container */
        .navbar {
          background-color: var(--purple-deep) !important;
          padding: 0.5rem 1rem;
          min-height: 56px;
          border-bottom: 1px solid var(--border-light);
        }

        /* Logo */
        .nav-logo {
          height: 40px;
          object-fit: contain;
        }

        /* Toggler icon */
        .navbar-toggler-icon {
          background-image: url(
            "data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(245,245,245,0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"
          );
        }

        /* Nav links */
        .nav-link {
          color: var(--white-soft) !important;
          transition: color 0.2s;
        }
        .nav-link:hover,
        .nav-link.active {
          color: var(--yellow-electric) !important;
        }
        .nav-link.active {
          position: relative;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 30%;
          height: 3px;
          background: var(--yellow-electric);
          border-radius: 2px;
        }

        /* Dropdown menu */
        .dropdown-menu {
          background-color: var(--purple-deep) !important;
          border: none;
          margin-top: 0.5rem;
        }
        .dropdown-item {
          color: var(--white-soft) !important;
          transition: background 0.2s, color 0.2s;
        }
        .dropdown-item:hover {
          background-color: var(--purple-tint) !important;
          color: var(--white-soft) !important;
        }

        /* Buttons */
        .btn-outline-primary {
          border-color: var(--white-soft) !important;
          color: var(--white-soft) !important;
          transition: background 0.2s, color 0.2s;
        }
        .btn-outline-primary:hover {
          background-color: var(--white-soft) !important;
          color: var(--purple-deep) !important;
        }
        .btn-primary {
          background-color: var(--yellow-electric) !important;
          border-color: var(--yellow-electric) !important;
          color: var(--purple-deep) !important;
        }
        .btn-primary:hover {
          background-color: #E6D700 !important; /* ~10% darker */
          border-color: #E6D700 !important;
        }

        /* Dashboard & Logout button styles */
        .btn-outline-light {
          border-color: var(--white-soft) !important;
          color: var(--white-soft) !important;
        }
        .btn-outline-light:hover {
          background-color: var(--white-soft) !important;
          color: var(--purple-deep) !important;
        }
        .btn-outline-danger {
          border-color: #dc3545 !important;
          color: #dc3545 !important;
        }
        .btn-outline-danger:hover {
          background-color: #dc3545 !important;
          color: #fff !important;
        }
      `}</style>
    </>
  );
}
