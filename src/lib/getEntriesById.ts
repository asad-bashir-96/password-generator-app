import { entries } from "@/db/schema";
import { InferModel } from "drizzle-orm";
import { eq } from "drizzle-orm";
import { db } from "../..";

type Entrie = InferModel<typeof entries>;

export default async function getEntriesById(
  id: string
): Promise<Entrie[] | null> {
  if (id) {
    const results = await db.select().from(entries).where(eq(entries.id, id));
    return results;
  }
  return null;
}
