"use server";
import { db } from "../..";
import { entries } from "@/db/schema";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export async function addEntry(data: FormData) {
  const { userId } = auth();
  const title = String(data.get("title"));
  const secret = String(data.get("password"));
  if (userId) {
    await db.insert(entries).values({
      id: userId,
      title,
      secret,
    });
  }
  console.log("entry has been added to database");
  redirect("/");
}
