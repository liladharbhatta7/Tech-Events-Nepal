'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
  // Add your auth-related state and functions here
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = {
    isAuthenticated: false,
    // Add more auth state and functions as needed
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}