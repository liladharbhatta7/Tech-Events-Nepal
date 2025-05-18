import React from 'react';
import Link from 'next/link';

export default function HelpSection() {
  return (
    <section id="help" className="bg-primary text-white text-center py-5">
      <div className="container">
        <h3 className="mb-3">Need Help or Have Questions?</h3>
        <p className="mb-4">Visit our Help Center or reach out directly.</p>
        <Link href="/help" className="btn btn-light btn-lg">Go to Help Center</Link>
      </div>
    </section>
  );
}
