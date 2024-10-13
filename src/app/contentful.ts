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

export const getAssetUrl = async (assetId: string) => {
  console.log("Getting asset URL for", assetId);
  if (!assetId) {
    throw new Error("Asset ID is required");
  }
  const asset = await client.getAsset(assetId);
  const url = asset?.fields.file?.url;

  if (!url) {
    throw new Error("Asset not found");
  }

  return `https:${url}`;
};
