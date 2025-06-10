import { db, Comment, eq } from 'astro:db';
export const prerender = false;

export async function POST({ request }: {request: Request}) {
  const { id } = await request.json();


  await db.delete(Comment)
    .where(eq(Comment.id, id));

  return new Response(JSON.stringify({ success: true }));
}