import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  console.warn('⚠️ NEXT_PUBLIC_API_URL is not defined');
}

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface AuthResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    // …other fields
  };
}

export async function registerUser(
  username: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    const { data } = await api.post('/api/auth/local/register', {
      username,
      email,
      password,
    });
    return data;
  } catch (err: any) {
    // axios wraps non-2xx in err.response
    const msg =
      err.response?.data?.error?.message || err.message || 'Registration failed';
    throw new Error(msg);
  }
}

export async function loginUser(
  identifier: string,
  password: string
): Promise<AuthResponse> {
  try {
    const { data } = await api.post('/api/auth/local', {
      identifier,
      password,
    });
    return data;
  } catch (err: any) {
    const msg =
      err.response?.data?.error?.message || err.message || 'Login failed';
    throw new Error(msg);
  }
}
