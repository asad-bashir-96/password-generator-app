import { entries } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "../..";
import { InferModel } from "drizzle-orm";
export type Password = InferModel<typeof entries>;
export type NewPassword = InferModel<typeof entries, "insert">;

export async function getAllPasswordsByUserId(
  userId: string
): Promise<Password[]> {
  try {
    const results = await db
      .select()
      .from(entries)
      .where(eq(entries.userId, userId));

    return results;
  } catch (e) {
    console.log("error has occured****************");
    console.log(e);
  }
  return [];
}

export async function insertPassword({ secret, title, userId }: NewPassword) {
  try {
    await db.insert(entries).values({
      userId,
      title,
      secret,
    });
    console.log("inserted password");
  } catch (e) {
    console.log("error has occured****************");
    console.log(e);
  }
}

export async function updatePasswordById(
  id: number,
  password: string,
  title: string
) {
  try {
    await db
      .update(entries)
      .set({ secret: password, title })
      .where(eq(entries.id, id));
    console.log("updated password");
  } catch (e) {
    console.log("error has occured*****************");
    console.log(e);
  }
}

export async function deletePasswordById(id: number) {
  try {
    await db.delete(entries).where(eq(entries.id, id));
    console.log("deleted password");
  } catch (e) {
    console.log("error has occured****************");
    console.log(e);
  }
}
