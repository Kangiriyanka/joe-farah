
import { db, Comment } from 'astro:db';

export default async function () {
	await db.insert(Comment).values([
		{
			postSlug: 'post-2',
			author: 'The Leaf',
			body: 'Conquer the terminal, all is mental!',
			website: 'www.thesingleleaf.fluff',
			published: new Date(),
			approved: false
		
	

			
		},
		{
			postSlug: 'post-1',
			author: 'Kangi',
			body: 'Slow down, meditate 5 minutes.',
			website: 'www.ochitsuke.yaha',
			published: new Date(),
			approved: false
			
		},

		
	]);
}
