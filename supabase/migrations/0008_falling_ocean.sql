-- Drop existing policy
DROP POLICY IF EXISTS "Enable message submissions" ON messages;

-- Create new policy matching subscribers approach
CREATE POLICY "Allow message submissions"
ON messages
FOR INSERT
TO public
WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;