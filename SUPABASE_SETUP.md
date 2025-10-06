# Supabase Authentication Setup Guide

This guide will help you set up Google OAuth authentication using Supabase for your BuildOnCoffee application.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. A Google Cloud Console account with OAuth credentials

## Step 1: Create a Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `build-on-coffee`
   - Database Password: (choose a strong password)
   - Region: (choose closest to your users)
5. Click "Create new project"

## Step 2: Configure Google OAuth

### In Google Cloud Console:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google+ API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API"
   - Click "Enable"
4. Create OAuth credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Application type: "Web application"
   - Name: "BuildOnCoffee Auth"
   - Authorized redirect URIs:
     - `https://your-project-id.supabase.co/auth/v1/callback`
     - `http://localhost:5173/auth/v1/callback` (for local development)
5. Copy the Client ID and Client Secret

### In Supabase Dashboard:

1. Go to your project dashboard
2. Navigate to "Authentication" > "Providers"
3. Find "Google" and click to configure
4. Toggle "Enable sign in with Google"
5. Enter your Google OAuth credentials:
   - Client ID: (from Google Cloud Console)
   - Client Secret: (from Google Cloud Console)
6. Click "Save"

## Step 3: Environment Variables

Create a `.env` file in your project root with the following variables:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### How to get these values:

1. **VITE_SUPABASE_URL**: Go to your Supabase project dashboard > Settings > API > Project URL
2. **VITE_SUPABASE_ANON_KEY**: Go to your Supabase project dashboard > Settings > API > Project API keys > anon public

## Step 4: Configure Redirect URLs

In your Supabase dashboard:

1. Go to "Authentication" > "URL Configuration"
2. Add the following to "Redirect URLs":
   - `http://localhost:5173/profile` (for local development)
   - `https://yourdomain.com/profile` (for production)
3. Add to "Site URL":
   - `http://localhost:5173` (for local development)
   - `https://yourdomain.com` (for production)

## Step 5: Database Setup (Optional)

If you want to store additional user data:

1. Go to "Table Editor" in your Supabase dashboard
2. Create a `profiles` table:

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  PRIMARY KEY (id)
);

-- Set up Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policy for users to view their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

-- Create policy for users to update their own profile
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create policy for users to insert their own profile
CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## Step 6: Test the Implementation

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/signup` or `/login`
3. Try the "Continue with Google" button
4. You should be redirected to Google's OAuth consent screen
5. After authorization, you'll be redirected back to your app

## Features Implemented

✅ **Google OAuth Authentication**
- Sign up with Google
- Sign in with Google
- Automatic user profile creation

✅ **Email/Password Authentication**
- Traditional signup/signin forms
- Email verification support

✅ **User Management**
- Profile page with user information
- Sign out functionality
- Protected routes

✅ **UI Components**
- Updated login/signup forms
- User avatar display
- Authentication state in navbar
- Mobile-responsive design

## Troubleshooting

### Common Issues:

1. **"Invalid redirect URI" error**:
   - Make sure your redirect URIs in Google Cloud Console match exactly
   - Include both localhost (development) and production URLs

2. **"Client ID not found" error**:
   - Verify your Google OAuth credentials are correct
   - Ensure the Google+ API is enabled

3. **Environment variables not loading**:
   - Restart your development server after adding `.env` file
   - Make sure variable names start with `VITE_`

4. **CORS errors**:
   - Add your domain to Supabase allowed origins
   - Check your redirect URLs configuration

### Getting Help:

- [Supabase Documentation](https://supabase.com/docs)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Supabase Discord Community](https://discord.supabase.com)

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for all sensitive data
- Regularly rotate your API keys
- Enable Row Level Security (RLS) on your database tables
- Use HTTPS in production

## Next Steps

Consider implementing:
- User profile management
- Role-based access control
- Email notifications
- Social login providers (GitHub, Discord, etc.)
- Two-factor authentication
