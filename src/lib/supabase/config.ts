// Supabase configuration
const requiredEnvVars = ['PUBLIC_SUPABASE_URL', 'PUBLIC_SUPABASE_ANON_KEY'] as const;

// Check for missing environment variables
const missingVars = requiredEnvVars.filter(name => !import.meta.env[name]);

// Default to empty strings if env vars are missing (for development)
export const supabaseConfig = {
  url: import.meta.env.PUBLIC_SUPABASE_URL || '',
  anonKey: import.meta.env.PUBLIC_SUPABASE_ANON_KEY || ''
} as const;

// Export connection status
export const isSupabaseConfigured = missingVars.length === 0;