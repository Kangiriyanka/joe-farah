import type { APIRoute } from 'astro';
export const prerender = false;

export const GET: APIRoute = async ({ cookies }) => {
 

  cookies.delete('admin', {
    path: '/', 
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/authentication/login',
    },
  });
};