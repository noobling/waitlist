import { NextRequest } from "next/server";
import { createClient } from "contentful";

const CONTENTFUL_SPACE_ID = "8vkfwwe23d9i";
const CONTENTFUL_ENVIRONMENT_ID = "master";
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
if (!CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("CONTENTFUL_ACCESS_TOKEN is not set");
}
const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  environment: CONTENTFUL_ENVIRONMENT_ID, // defaults to 'master' if not set
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export async function GET(request: NextRequest) {
  const assetId = request.nextUrl.searchParams.get("assetId");
  if (!assetId) {
    return Response.json({ error: "Asset ID is required" }, { status: 400 });
  }
  const asset = await client.getAsset(assetId);
  const url = asset?.fields.file?.url;

  if (!url) {
    return Response.json({ error: "Asset not found" }, { status: 404 });
  }

  return Response.json({ data: `https:${url}` });
}
