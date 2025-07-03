import { createClient } from '@supabase/supabase-js'

// Temporarily hardcode for testing - REMOVE THESE BEFORE PRODUCTION
const supabaseUrl = 'https://riisdbkiwmzgbohgsxoo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpaXNkYmtpd216Z2JvaGdzeG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NjQ3MTcsImV4cCI6MjA2NjU0MDcxN30.QELPe8JWacG68Uvl1z6bzvKDzRWNza1AoPYuPjQ9M64'

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key exists:', !!supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(`Missing Supabase environment variables - URL: ${supabaseUrl}, Key: ${!!supabaseAnonKey}`)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test connection after creating the client
supabase.from('waitlist_emails').select('count', { count: 'exact', head: true })
  .then(({ count, error }) => {
    if (error) {
      console.error('Supabase connection test failed:', error)
    } else {
      console.log('Supabase connection test successful, count:', count)
    }
  })