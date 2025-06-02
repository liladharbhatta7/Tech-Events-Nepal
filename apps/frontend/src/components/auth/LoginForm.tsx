'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { loginUser } from '@/lib/auth';

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ identifier: '', password: '' });
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
      const { jwt } = await loginUser(formData.identifier, formData.password);
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

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/' });
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 px-3" style={{
      background: 'linear-gradient(135deg, #0a0f2c, #11173a)'
    }}>
      <style jsx>{`
        .login-card {
          background-color: #1a2238;
          max-width: 420px;
          width: 100%;
          color: white;
          border-radius: 1rem;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        }
        .form-control-custom {
          background-color: #2a3350;
          color: white;
          border: none;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .form-control-custom::placeholder {
          color: #adb5bd;
        }
        .form-label {
          color: #cfd8e3;
        }
        .btn-google {
          border-color: #ccc;
          color: white;
          background-color: transparent;
        }
        .btn-google:hover {
          background-color: #2d3a5a;
        }
        .link-light-blue {
          color: #69bff8;
        }
      `}</style>

      <div className="card login-card p-4">
        <h2 className="text-center mb-4 fw-bold">Welcome Back</h2>

        {error && (
          <div className="alert alert-danger text-center mb-3 py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="identifier" className="form-label">
              Username or Email
            </label>
            <input
              type="text"
              name="identifier"
              id="identifier"
              className="form-control form-control-custom"
              placeholder="Enter username or email"
              value={formData.identifier}
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
              className="form-control form-control-custom"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid mb-3">
            <button
              type="submit"
              className={`btn btn-primary btn-lg fw-semibold ${loading ? 'disabled' : ''}`}
              disabled={loading}
            >
              {loading ? 'Logging in…' : 'Login'}
            </button>
          </div>

          <div className="d-grid mb-3">
            <button
              type="button"
              className="btn btn-google btn-lg fw-semibold"
              onClick={handleGoogleSignIn}
            >
              <i className="bi bi-google me-2"></i>
              Sign in with Google
            </button>
          </div>
        </form>

        <div className="text-end">
          <a href="/forgot-password" className="text-decoration-none link-light-blue small">
            Forgot password?
          </a>

        </div>
      </div>
    </div>
  );
}
