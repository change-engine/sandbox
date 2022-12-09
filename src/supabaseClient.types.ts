export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      destination: {
        Row: {
          moment_id: string
          address: string
          created_at: string
        }
        Insert: {
          moment_id: string
          address: string
          created_at?: string
        }
        Update: {
          moment_id?: string
          address?: string
          created_at?: string
        }
      }
      moment: {
        Row: {
          subject: string
          body: string
          date: string
          id: string
          created_at: string
        }
        Insert: {
          subject: string
          body: string
          date: string
          id?: string
          created_at?: string
        }
        Update: {
          subject?: string
          body?: string
          date?: string
          id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

