// src/components/auth/SignupForm.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { registerUser } from '@/lib/auth';

export default function SignupForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { jwt } = await registerUser(formData.email, formData.password);
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', jwt);
      }
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    signIn('google', { callbackUrl: '/' });
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Sign Up</h2>

        {error && <div className="alert alert-danger text-center mb-3">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email (Gmail only)
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid mb-3">
            <button
              type="submit"
              className={`btn btn-success ${loading ? 'disabled' : ''}`}
              disabled={loading}
            >
              {loading ? 'Signing up…' : 'Sign Up'}
            </button>
          </div>

          <div className="d-grid mb-3">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleGoogleSignUp}
            >
              <i className="bi bi-google me-2"></i>
              Sign up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
