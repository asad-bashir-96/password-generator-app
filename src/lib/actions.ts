"use server";
import { auth } from "@clerk/nextjs";
import {
  insertPassword,
  updatePasswordById,
  deletePasswordById,
} from "./controllers";
import { revalidatePath } from "next/cache";
const { userId } = auth();

export async function addPassword(data: FormData) {
  const title = String(data.get("title"));
  const password = String(data.get("password"));
  if (userId) {
    await insertPassword({ userId, secret: password, title });
    console.log("password has been added to database");
  }

  revalidatePath("/");
}

export async function editPassword(data: FormData) {
  const id = Number(data.get("id"));
  const password = String(data.get("newpassword"));
  if (userId) {
    await updatePasswordById(id, password);
    console.log("password has been updated");
  }
  revalidatePath("/");
}

export async function deletePassword(data: FormData) {
  const id = Number(data.get("id"));
  if (userId) {
    await deletePasswordById(id);
    console.log("password was deleted");
  }
  revalidatePath("/");
}
