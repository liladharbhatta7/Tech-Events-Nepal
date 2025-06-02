'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { loginUser } from '@/lib/auth';
import { BiLock, BiMailSend, BiLogoGoogle } from 'react-icons/bi';

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
      background: 'linear-gradient(45deg, #0F0120, #1E0344)'
    }}>
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to your account</p>

        {error && (
          <div className="error-alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <BiMailSend className="input-icon" />
            <input
              type="text"
              name="identifier"
              id="identifier"
              placeholder="Username or email"
              value={formData.identifier}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <BiLock className="input-icon" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`login-button ${loading ? 'disabled' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </form>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <button
          type="button"
          className="google-button"
          onClick={handleGoogleSignIn}
        >
          <BiLogoGoogle className="google-icon" />
          Sign in with Google
        </button>

        <div className="forgot-password">
          <a href="/forgot-password">
            Forgot password?
          </a>
        </div>
      </div>

      <style jsx>{`
        .login-card {
          background: rgba(26, 3, 51, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(168, 139, 255, 0.15);
          border-radius: 1.25rem;
          padding: 2.5rem;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
        }

        .login-title {
          color: #F5F3FF;
          text-align: center;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .login-subtitle {
          color: rgba(245, 243, 255, 0.7);
          text-align: center;
          font-size: 1rem;
          margin-bottom: 2rem;
        }

        .input-group {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #A6E3FE;
          font-size: 1.2rem;
        }

        .input-group input {
          width: 100%;
          padding: 0.9rem 1rem 0.9rem 3rem;
          background: rgba(42, 24, 71, 0.6);
          border: 1px solid rgba(168, 139, 255, 0.2);
          border-radius: 0.75rem;
          color: #F5F3FF;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .input-group input:focus {
          outline: none;
          border-color: #2DD4BF;
          box-shadow: 0 0 0 2px rgba(45, 212, 191, 0.2);
        }

        .input-group input::placeholder {
          color: rgba(245, 243, 255, 0.5);
        }

        .login-button {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(45deg, #6E47A1, #4A3478);
          color: #F5F3FF;
          border: none;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .login-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(110, 71, 161, 0.3);
          background: linear-gradient(45deg, #7B53B3, #5A4293);
        }

        .login-button.disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .error-alert {
          background: rgba(255, 88, 88, 0.15);
          color: #FFA8A8;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          text-align: center;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 88, 88, 0.3);
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 1.75rem 0;
        }

        .divider::before, .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid rgba(168, 139, 255, 0.1);
        }

        .divider span {
          color: rgba(245, 243, 255, 0.5);
          padding: 0 1rem;
          font-size: 0.9rem;
        }

        .google-button {
          width: 100%;
          padding: 1rem;
          background: transparent;
          color: #F5F3FF;
          border: 1px solid rgba(168, 139, 255, 0.2);
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .google-button:hover {
          background: rgba(42, 24, 71, 0.6);
          transform: translateY(-2px);
          border-color: rgba(168, 139, 255, 0.3);
        }

        .google-icon {
          font-size: 1.3rem;
          color: #A6E3FE;
        }

        .forgot-password {
          text-align: center;
          margin-top: 1.5rem;
        }

        .forgot-password a {
          color: #69bff8;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .forgot-password a:hover {
          color: #2DD4BF;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}