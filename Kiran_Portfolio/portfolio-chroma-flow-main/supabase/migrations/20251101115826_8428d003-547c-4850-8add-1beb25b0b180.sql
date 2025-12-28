-- Create storage bucket for certificate images
INSERT INTO storage.buckets (id, name, public)
VALUES ('certificates', 'certificates', true);

-- Create policies for certificate uploads
CREATE POLICY "Anyone can view certificate images"
ON storage.objects FOR SELECT
USING (bucket_id = 'certificates');

CREATE POLICY "Anyone can upload certificate images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'certificates');