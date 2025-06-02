// src/lib/auth.ts

// Use the environment variable if present; otherwise default to localhost:1337
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

async function strapiFetch(
  endpoint: string,
  method: 'POST' | 'GET' = 'GET',
  body: Record<string, any> | null = null
) {
  // Build the full URL based on env var (or fallback)
  const url = `${STRAPI_URL}${endpoint}`;

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : null,
  });

  // Read the raw response text
  const text = await res.text();

  // Try parsing JSON; if it’s HTML or invalid JSON, throw
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    console.error('[lib/auth] Invalid JSON response from:', url);
    console.error('[lib/auth] Full response text was:\n', text);
    throw new Error('Failed to parse JSON from Strapi. See console for raw response.');
  }

  if (!res.ok) {
    const message = data.error?.message || data.message || 'Unknown error from Strapi';
    throw new Error(message);
  }

  return data;
}

export async function loginUser(identifier: string, password: string) {
  return await strapiFetch('/api/auth/local', 'POST', { identifier, password });
}

export async function registerUser(email: string, password: string) {
  return await strapiFetch('/api/auth/local/register', 'POST', {
    username: email,
    email,
    password,
  });
}
        