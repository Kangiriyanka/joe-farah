import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://comments-kangiriyanka.aws-us-east-1.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN ?? "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDk1OTE2MjUsImlkIjoiNmQ2Y2QyYjYtMDcwMy00NjdhLWEzYTAtZmE3ODE3NzY1OTE3IiwicmlkIjoiOTBiMGMyZjktNTRmYi00YjVhLThjNGUtYWRhNDViOGM1MjI5In0.GQ3AZ00x09QHk22UteRQJtrkG2sMIKXHIHEVmrimTY9ElXUtPrwPWsb4sgxDQqqsL8tpzwa8pkzIt-j_x2FxBg"
});
const Comment = asDrizzleTable("Comment", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Comment", "primaryKey": true } }, "postSlug": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "postSlug", "collection": "Comment", "primaryKey": false, "optional": false } }, "author": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "author", "collection": "Comment", "primaryKey": false, "optional": false } }, "body": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "body", "collection": "Comment", "primaryKey": false, "optional": false } }, "published": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "published", "collection": "Comment" } }, "website": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "website", "collection": "Comment", "primaryKey": false, "optional": false } }, "approved": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "approved", "collection": "Comment" } } }, "deprecated": false, "indexes": {} }, false);

export { Comment as C, db as d };
