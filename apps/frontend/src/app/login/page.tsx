// src/app/login/page.tsx
'use client';

import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="container py-5" style={{ maxWidth: '480px' }}>
      <LoginForm />
    </div>
  );
}
