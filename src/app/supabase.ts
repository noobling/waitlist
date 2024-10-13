import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

let supabase: SupabaseClient;

if (!supabaseKey || !supabaseUrl) {
  throw new Error("SUPABASE_KEY or SUPABASE_URL is not set");
} else {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export const getWaitlist = async () => {
  console.log("Getting waitlist");
  const { data, error } = await supabase
    .from("waitlist")
    .select("id, username, image_url");

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
};
