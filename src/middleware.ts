import { defineMiddleware } from 'astro/middleware';

/*
- What is middleware - 

Middleware is simply this: I'm about to access page XYZ, and then before doing that, I wanna do something.
That something in my case is checking that the admin is accessing the routes that start with /admin

- From Astro Docs -
The context object includes information to be made available to other middleware, 
API routes and .astro routes during the rendering process.

*/
export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;


  // If the user is trying to access the admin panel, checks that cookie for admin is set to True
  // You can check it out Application > Cookies 

  if (pathname.startsWith('/admin')) {
    const isAdmin = context.cookies.get('admin')?.value === 'true';

    if (!isAdmin) {
      return new Response('Access denied', { status: 403 });
    }
  }

  // Continue to the requested page
  return next();
});