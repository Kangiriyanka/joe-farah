
import { db, Comment, eq, desc } from "astro:db";

export async function getComments(postSlug: string) {
    console.log(postSlug)
  return await db
    .select()
    .from(Comment)
    .where(eq(Comment.postSlug, postSlug))
    .orderBy(desc(Comment.published));
}