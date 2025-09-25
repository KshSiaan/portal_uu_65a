import { apiConfig } from "@/lib/config";
import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";
export async function GET() {
  const client = new Client({ auth: apiConfig.notion.secret });

  const page = await client.pages.retrieve({
    page_id: "279b2c94f33380a5a586f09d2ce87900",
  });
  const blocks = await client.blocks.children.list({
    block_id: "279b2c94-f333-80a5-a586-f09d2ce87900",
    page_size: 50, // optional, max 100
  });
  console.log(page);
  return NextResponse.json({ page, blocks });
}
