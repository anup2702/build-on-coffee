-- ============================================
-- Projects Database Setup for Supabase
-- Issue #452: Add form to collect project details
-- ============================================

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Project basic info
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  difficulty_level VARCHAR(50) NOT NULL CHECK (difficulty_level IN ('Beginner', 'Intermediate', 'Advanced')),
  
  -- Project links and resources
  github_url TEXT,
  live_demo_url TEXT,
  image_url TEXT,
  
  -- Technologies used
  technologies TEXT[], -- Array of technology tags
  
  -- Project metadata
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  is_published BOOLEAN DEFAULT false,
  views_count INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_published ON projects(is_published);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);

-- Create project_likes table for tracking user likes
CREATE TABLE IF NOT EXISTS project_likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(project_id, user_id) -- Prevent duplicate likes
);

-- Create index for likes
CREATE INDEX IF NOT EXISTS idx_project_likes_project_id ON project_likes(project_id);
CREATE INDEX IF NOT EXISTS idx_project_likes_user_id ON project_likes(user_id);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_projects_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS trigger_update_projects_updated_at ON projects;
CREATE TRIGGER trigger_update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_projects_updated_at();

-- Create function to increment views count
CREATE OR REPLACE FUNCTION increment_project_views(project_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE projects
  SET views_count = views_count + 1
  WHERE id = project_uuid;
END;
$$ LANGUAGE plpgsql;

-- Create function to toggle like
CREATE OR REPLACE FUNCTION toggle_project_like(project_uuid UUID, user_uuid UUID)
RETURNS BOOLEAN AS $$
DECLARE
  like_exists BOOLEAN;
BEGIN
  -- Check if like exists
  SELECT EXISTS(
    SELECT 1 FROM project_likes 
    WHERE project_id = project_uuid AND user_id = user_uuid
  ) INTO like_exists;
  
  IF like_exists THEN
    -- Remove like
    DELETE FROM project_likes 
    WHERE project_id = project_uuid AND user_id = user_uuid;
    
    -- Decrement likes count
    UPDATE projects 
    SET likes_count = likes_count - 1 
    WHERE id = project_uuid;
    
    RETURN false; -- Unliked
  ELSE
    -- Add like
    INSERT INTO project_likes (project_id, user_id) 
    VALUES (project_uuid, user_uuid);
    
    -- Increment likes count
    UPDATE projects 
    SET likes_count = likes_count + 1 
    WHERE id = project_uuid;
    
    RETURN true; -- Liked
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_likes ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS Policies for projects table
-- ============================================

-- Policy: Anyone can view published projects
CREATE POLICY "Anyone can view published projects" ON projects
  FOR SELECT
  USING (is_published = true AND status = 'approved');

-- Policy: Users can view their own projects (regardless of status)
CREATE POLICY "Users can view own projects" ON projects
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Authenticated users can insert their own projects
CREATE POLICY "Users can insert own projects" ON projects
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own projects
CREATE POLICY "Users can update own projects" ON projects
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own projects
CREATE POLICY "Users can delete own projects" ON projects
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- RLS Policies for project_likes table
-- ============================================

-- Policy: Anyone can view likes
CREATE POLICY "Anyone can view likes" ON project_likes
  FOR SELECT
  USING (true);

-- Policy: Authenticated users can insert likes
CREATE POLICY "Users can insert own likes" ON project_likes
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own likes
CREATE POLICY "Users can delete own likes" ON project_likes
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- Grant permissions
-- ============================================

GRANT EXECUTE ON FUNCTION increment_project_views(UUID) TO authenticated, anon;
GRANT EXECUTE ON FUNCTION toggle_project_like(UUID, UUID) TO authenticated;

-- ============================================
-- Insert sample data (optional - for testing)
-- ============================================

-- Uncomment below to insert sample projects
/*
INSERT INTO projects (
  user_id,
  title,
  description,
  category,
  difficulty_level,
  github_url,
  live_demo_url,
  image_url,
  technologies,
  status,
  is_published
) VALUES (
  auth.uid(), -- Replace with actual user ID for testing
  'Portfolio Website',
  'A modern portfolio website built with React and Tailwind CSS showcasing projects and skills.',
  'Web Development',
  'Intermediate',
  'https://github.com/username/portfolio',
  'https://portfolio.example.com',
  'https://via.placeholder.com/600x400',
  ARRAY['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
  'approved',
  true
);
*/

-- ============================================
-- Useful queries for testing
-- ============================================

-- Get all published projects
-- SELECT * FROM projects WHERE is_published = true AND status = 'approved' ORDER BY created_at DESC;

-- Get user's projects
-- SELECT * FROM projects WHERE user_id = 'USER_UUID' ORDER BY created_at DESC;

-- Get project with like status for a user
-- SELECT p.*, EXISTS(SELECT 1 FROM project_likes WHERE project_id = p.id AND user_id = 'USER_UUID') as user_liked
-- FROM projects p WHERE p.id = 'PROJECT_UUID';

-- ============================================
-- Migration complete!
-- ============================================