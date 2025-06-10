import type { APIRoute } from 'astro';


const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD;
export const prerender = false;


export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const password = formData.get('password');

  if (password === ADMIN_PASSWORD) {
    cookies.set('admin', 'true', {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD, // True if the site is running in production, false o.w.
      maxAge: 60 * 60 * 2, // 2 hours
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/admin/comments',
      },
    });
  }

  return new Response('Unauthorized', { status: 401 });
};