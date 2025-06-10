import { db, Comment } from 'astro:db';
export const prerender = false;

export async function POST({ request }: {request: Request}) {
  const data = await request.formData();
  const postSlug = data.get('postSlug')
  console.log(data)

  await db.insert(Comment).values({
    postSlug: data.get('postSlug')?.toString() || '' ,
    author: data.get('author')?.toString() || '',
    body: data.get('body')?.toString() || '',
    website: data.get('website')?.toString() || '',
    approved: false,
    published: new Date()
    
  });

  return new Response(null, {
    
    status: 303,
    headers: {
      Location: `/posts/${postSlug}`,
    },
  });
}