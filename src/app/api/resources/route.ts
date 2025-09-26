/* eslint-disable @typescript-eslint/no-explicit-any */

import { notionClient } from "@/lib/config";
import { NextResponse } from "next/server";

export interface contentType {
  type: string;
  text?: string;
  data:
    | string
    | {
        type: string;

        data: string | { type: string; data?: any }[];
      }[];
}

export async function GET() {
  const page = await notionClient.pages.retrieve({
    page_id: "27ab2c94f33380218c14d24211b0fdd5",
  });

  const content: contentType[] = [];

  const blocks: any = await notionClient.blocks.children.list({
    block_id: "27ab2c94f33380218c14d24211b0fdd5",
  });

  for (const x of blocks.results) {
    if (x.type === "heading_2") {
      content.push({
        type: x.type,
        data: x.heading_2.rich_text[0].plain_text,
      });
    } else if (x.type === "bulleted_list_item") {
      if (x.has_children) {
        const payload = await blockGetter(x.id);
        content.push({
          type: x.type,
          text: x.bulleted_list_item.rich_text[0].plain_text,
          data: payload,
        });
      } else {
        content.push({
          type: x.type,
          data: x.bulleted_list_item.rich_text[0]?.text?.content,
        });
      }
    }
  }
  return NextResponse.json({ page, content });
}
async function blockGetter(x: string) {
  // const client = new Client({ auth: apiConfig.notion.secret });
  const blocks = await notionClient.blocks.children.list({
    block_id: x,
  });

  const possibles: { type: string; data: string }[] = [];

  blocks.results.map((x: any) => {
    if (x.type === "bulleted_list_item") {
      possibles.push({
        type: x.type,
        data: x.bulleted_list_item.rich_text[0]?.text?.content,
      });
    }
  });

  return possibles;
}
