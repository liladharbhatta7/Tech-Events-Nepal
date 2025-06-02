'use client';

import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

interface SessionProviderClientProps {
  children: ReactNode;
}

export default function SessionProviderClient({ children }: SessionProviderClientProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
