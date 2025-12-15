import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://lpkpkrmuenvdytcovbwm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwa3Brcm11ZW52ZHl0Y292YndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3NzEzNzYsImV4cCI6MjA4MTM0NzM3Nn0.GtEAfY_um25f-Y4-gceFs2Hz1wPkqs_T3YpkPjUQphM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

