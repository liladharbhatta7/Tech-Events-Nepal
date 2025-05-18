import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <div className="container">
        <small className="text-muted">
          © {new Date().getFullYear()} Tech Events Nepal. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
