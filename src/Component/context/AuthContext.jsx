import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { AuthContext } from '../../lib/AuthContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error getting initial session:", error);
          setLoading(false);
          return;
        }
        
        if (session) {
          console.log("Initial session found:", session.user);
          setUser(session.user);
          setIsAuthenticated(true);
        } else {
          console.log("No initial session found");
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Error in getInitialSession:", err);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          setUser(session.user);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);


  const signInWithGoogle = async () => {
    try {
      console.log("Initiating Google OAuth...");
      console.log("Redirect URL:", `${window.location.origin}/auth/callback`);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      console.log("OAuth response:", { data, error });
      
      if (error) {
        console.error("OAuth error:", error);
        throw error;
      }
      
      return data;
    } catch (err) {
      console.error("Error in signInWithGoogle:", err);
      throw err;
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const resetPassword = async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) throw error;
    return data;
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        loading,
        signInWithGoogle,
        logout, 
        resetPassword 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};