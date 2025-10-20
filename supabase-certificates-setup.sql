-- Create certificates table in Supabase
-- Run this SQL in your Supabase SQL Editor
-- updated

CREATE TABLE IF NOT EXISTS certificates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  certificate_id VARCHAR(50) UNIQUE NOT NULL,
  recipient_name VARCHAR(255) NOT NULL,
  certificate_type VARCHAR(100) NOT NULL,
  role VARCHAR(255),
  duration VARCHAR(100),
  issued_by VARCHAR(255) DEFAULT 'Build On Coffee',
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'revoked')),
  issued_date DATE DEFAULT CURRENT_DATE,
  expiry_date DATE,
  course_name VARCHAR(255),
  program_name VARCHAR(255),
  skills TEXT[] DEFAULT '{}', -- ✅ ONLY CHANGE: Added comma here
  grade VARCHAR(10),
  project_details TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on certificate_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_certificates_certificate_id ON certificates(certificate_id);

-- Create an index on recipient_name for searching
CREATE INDEX IF NOT EXISTS idx_certificates_recipient_name ON certificates(recipient_name);

-- Insert sample certificate (the one from your example)
INSERT INTO certificates (
  certificate_id,
  recipient_name,
  certificate_type,
  role,
  duration,
  issued_by,
  status,
  issued_date,
  expiry_date
) VALUES (
  'BOC25-INT-101',
  'Apekshaa Yadav',
  'Internship Certificate',
  'Graphic Design Intern',
  'August 2025 – September 2025',
  'Build On Coffee',
  'active',
  '2025-08-10',
  '2025-09-10'
) ON CONFLICT (certificate_id) DO NOTHING;

INSERT INTO certificates (
  certificate_id,
  recipient_name,
  certificate_type,
  role,
  duration,
  issued_by,
  status,
  issued_date,
  expiry_date
) VALUES (
  'BOC25-INT-102',
  'Agritsa Sofia Tsabita',
  'Internship Certificate',
  'Graphic Design Intern',
  'August 2025 – September 2025',
  'Build On Coffee',
  'active',
  '2025-08-05',
  '2025-09-05'
) ON CONFLICT (certificate_id) DO NOTHING;

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_certificates_updated_at 
  BEFORE UPDATE ON certificates 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to certificates
CREATE POLICY "Allow public read access to certificates" ON certificates
  FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert certificates (for admin use)
CREATE POLICY "Allow authenticated users to insert certificates" ON certificates
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update certificates (for admin use)
CREATE POLICY "Allow authenticated users to update certificates" ON certificates
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Optional: Create a view for public certificate verification (without sensitive data)
CREATE OR REPLACE VIEW public_certificates AS
SELECT 
  certificate_id,
  recipient_name,
  certificate_type,
  role,
  duration,
  issued_by,
  status,
  issued_date,
  expiry_date,
  course_name,
  program_name,
  grade
FROM certificates
WHERE status = 'active' AND (expiry_date IS NULL OR expiry_date > CURRENT_DATE);

-- Grant access to the view
GRANT SELECT ON public_certificates TO anon, authenticated;