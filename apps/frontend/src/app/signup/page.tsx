// src/app/signup/page.tsx
'use client';

import React from 'react';
import SignupForm from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="container py-5" style={{ maxWidth: '480px' }}>
      <SignupForm />
    </div>
  );
}
