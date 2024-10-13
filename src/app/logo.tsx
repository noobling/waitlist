import { getAssetUrl } from "./contentful";
import assetData from "./data.json";
import Image from "next/image";
import Link from "next/link";
export default async function Logo({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const logoUrl = await getAssetUrl(assetData.LOGO_ASSET_ID);

  if (!logoUrl) return null;
  return (
    <Link href="/">
      <Image
        src={logoUrl}
        alt={assetData.APP_NAME}
        width={width}
        height={height}
        className="rounded-full"
      />
    </Link>
  );
}
