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
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Why Choose TechEvents?</h2>
        <div className="row text-center g-4">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="col-md-3">
              <div className="display-4 text-primary"><Icon /></div>
              <h5 className="mt-3">{title}</h5>
              <p className="text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
