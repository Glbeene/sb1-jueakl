import { createClient } from '@supabase/supabase-js';
import type { Database } from './types/database';
import { supabaseConfig, isSupabaseConfigured } from './config';

// Create a mock client when environment variables are missing
const mockClient = {
  from: () => ({
    insert: async () => ({ data: null, error: new Error('Supabase is not configured') }),
    select: async () => ({ data: null, error: new Error('Supabase is not configured') })
  })
} as any;

export const supabase = isSupabaseConfigured
  ? createClient<Database>(supabaseConfig.url, supabaseConfig.anonKey)
  : mockClient;

export const isSupabaseReady = isSupabaseConfigured;