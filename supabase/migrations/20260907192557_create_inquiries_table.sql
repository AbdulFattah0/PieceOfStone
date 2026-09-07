/*
# Create inquiries table for contact and custom artwork forms

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email
  - `phone` (text) — optional phone number
  - `inquiry_type` (text, not null) — type of inquiry: purchase, custom, wholesale, partnership, other
  - `message` (text) — the main message/body
  - `custom_details` (jsonb) — additional structured fields for custom artwork requests (preferred_dimensions, preferred_materials, budget, reference_image_url, what_to_create, additional_details)
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `inquiries`.
- Allow anon + authenticated INSERT only (public can submit forms but cannot read or modify submissions).
- No SELECT/UPDATE/DELETE for anon — only inserts, so visitors can submit forms but not see or modify other people's inquiries.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  inquiry_type text NOT NULL,
  message text,
  custom_details jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);
