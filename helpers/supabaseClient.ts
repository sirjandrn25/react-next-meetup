import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const client = createClient(supabaseUrl, supabaseKey)

export { client as supabase }

// const supabaseUrl = 'https://rmgopdzecjutayspaoij.supabase.co'
// const supabaseAnonKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtZ29wZHplY2p1dGF5c3Bhb2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU2MzUzNTIsImV4cCI6MTk3MTIxMTM1Mn0.zeEnN8eXKT6P3nyYsXfCxkNxGMyBz6qsz7q83YKhH7s'

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)
