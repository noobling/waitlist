import { createClient, SupabaseClient } from "@supabase/supabase-js";
import CryptoJS from "crypto-js";
import { revalidatePath } from "next/cache";

const supabaseUrl = "https://gcicurjrvqcfdyofnvgo.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

let supabase: SupabaseClient;

if (!supabaseKey) {
  throw new Error("SUPABASE_KEY is not set");
} else {
  supabase = createClient(supabaseUrl, supabaseKey);
}

function sha256Hash(str: string) {
  return CryptoJS.SHA256(str).toString();
}

const getGravatarUrl = async (email: string) => {
  const hash = sha256Hash(email.toLowerCase().trim());
  return `https://gravatar.com/avatar/${hash}?d=wavatar`;
};

export async function GET() {
  const { data, error } = await supabase
    .from("waitlist")
    .select("id, username, image_url");
  if (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ data });
}

export async function POST(request: Request) {
  const { email, username } = await request.json();
  const gravatarUrl = await getGravatarUrl(email);

  const { data, error } = await supabase
    .from("waitlist")
    .insert({ email, username, image_url: gravatarUrl });
  if (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/", "page");

  return Response.json({ data });
}
