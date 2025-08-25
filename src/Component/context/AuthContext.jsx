import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Priya S.',
    email: 'priya@gmail.com',
    provider: 'Google',
    contributions: {
      pullRequests: 5,
      issues: 2,
      commits: 42,
    },
    bookmarkedCourses: [
      { id: 'data-structures', name: 'Data Structures' },
      { id: 'system-design', name: 'System Design' },
    ],
    favoriteTools: [
      { id: 'snapfolio', name: 'SnapFolio' },
    ],
    badges: ['Quiz Master', 'Community Builder'],
    progress: {
      'data-structures': 80,
      'system-design': 40
    },
    challengesAccepted: ['Complete 3 Courses', 'Refer a Friend']
  });

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};