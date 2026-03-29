
import { db, Comment, eq, desc,and  } from 'astro:db';

// Use npx astro dev --remote to sync with Turso
export async function fetch_comments(postSlug: string) {

  return await db
    .select()
    .from(Comment)
    .where(and(
      eq(Comment.postSlug, postSlug),
      eq(Comment.approved, true))
      
    
    )
  
    .orderBy(desc(Comment.published));
  
}


const all = await db.select().from(Comment);
console.log("ALL:", all);