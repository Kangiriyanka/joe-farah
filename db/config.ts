import { defineDb, defineTable, column} from 'astro:db';


const Comment = defineTable({
  columns: {
 
    id: column.number({ primaryKey: true }),
    postSlug: column.text(),
    author: column.text(),
    body: column.text(),
    published: column.date(),
    website: column.text(),
    approved: column.boolean(),
  }
})
// https://astro.build/db/config
export default defineDb({
  tables: { Comment}
});
