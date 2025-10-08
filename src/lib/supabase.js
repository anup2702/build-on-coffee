import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  // Don't throw here to avoid crashing the whole app during local development.
  // Instead warn and export a minimal fallback object that surfaces a clear error
  // if used. Developers should add real VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
  // to a local .env file for full functionality.
  // Example .env.local:
  // VITE_SUPABASE_URL=https://xyzcompany.supabase.co
  // VITE_SUPABASE_ANON_KEY=public-anon-key
  //
  // WARNING: This fallback will prevent an immediate crash but any call that
  // interacts with Supabase will reject with a helpful message.
  // Replace this with real keys for full functionality.
  console.warn('Supabase not configured: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are missing. Supabase calls will fail until you add them to your .env file.');

  // Not throwing here; we provide fallbacks below.

  // Helper to return a shape consistent with supabase-js responses { data, error }
  const errorResponse = (msg) => ({ data: null, error: new Error(msg) });

  // Provide a non-throwing getSession that resolves to no session so initial session
  // logic can continue without crashing.
  const getSession = async () => ({ data: { session: null }, error: null });

  // onAuthStateChange should exist and return a subscription object with unsubscribe()
  const onAuthStateChange = () => {
    // do not invoke callback; return a dummy subscription
    return { data: { subscription: { unsubscribe: () => {} } } };
  };

  const signInWithOAuth = async () => errorResponse('Supabase not configured');
  const signOut = async () => ({ error: new Error('Supabase not configured') });
  const resetPasswordForEmail = async () => errorResponse('Supabase not configured');

  supabase = {
    auth: {
      // Provide methods used by the app
      getSession,
      onAuthStateChange,
      signInWithOAuth,
      signOut,
      resetPasswordForEmail,
    },
    from: () => ({
      select: async () => errorResponse('Supabase not configured'),
      insert: async () => errorResponse('Supabase not configured'),
      update: async () => errorResponse('Supabase not configured'),
      delete: async () => errorResponse('Supabase not configured'),
    }),
    // fallback helper to indicate not configured
    _notConfigured: true,
  };
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  });
}

export { supabase };
