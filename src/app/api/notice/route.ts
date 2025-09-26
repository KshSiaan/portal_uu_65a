/* eslint-disable @typescript-eslint/no-explicit-any */
import { notionClient } from "@/lib/config";
import { NextResponse } from "next/server";

export async function GET() {
  const page = await notionClient.pages.retrieve({
    page_id: "27ab2c94f33380ce86b4f50afc4b9238",
  });

  const blocks: any = await notionClient.blocks.children.list({
    block_id: "27ab2c94f33380ce86b4f50afc4b9238",
  });

  const content: string[] = [];

  blocks.results.map((x: any) => {
    if (x.type === "bulleted_list_item") {
      content.push(x.bulleted_list_item.rich_text[0].plain_text);
    }
  });

  return NextResponse.json({ page, content });
}
