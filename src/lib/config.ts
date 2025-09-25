import { createClient } from "@supabase/supabase-js";
export const apiConfig = {
  db: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    api_key: process.env.NEXT_PUBLIC_SUPABASE_API_KEY!,
  },
  notion: {
    secret: process.env.NEXT_PUBLIC_NOTION_SECRET!,
  },
};

export const supabase = createClient(apiConfig.db.url, apiConfig.db.api_key);
