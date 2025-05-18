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
  { icon: BiGroup, title: 'Community Forums', desc: 'Ask questions & find teammates.', href: '/community/forums' },
  { icon: BiBookAlt, title: 'Online Courses', desc: 'Curated tech learning paths.', href: '/community/courses' },
  { icon: BiNotepad, title: 'Blog & Articles', desc: 'Insights, tutorials & recaps.', href: '/blog' },
  { icon: BiPackage, title: 'Sponsorships', desc: 'Partner with us & gain visibility.', href: '/sponsor' },
];

export default function Services() {
  return (
    <section id="services" className="bg-light py-5">
      <div className="container">
        <h2 className="mb-4 text-center">More From TechEvents</h2>
        <div className="row text-center g-4">
          {services.map(({ icon: Icon, title, desc, href }) => (
            <div key={title} className="col-md-3">
              <div className="display-4 text-primary"><Icon /></div>
              <h5 className="mt-3">{title}</h5>
              <p className="text-muted">{desc}</p>
              <Link href={href} className="stretched-link" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
