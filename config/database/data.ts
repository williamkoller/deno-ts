import { Client } from "https://deno.land/x/mysql/mod.ts?"

export const client = await new Client().connect({
  hostname: '0.0.0.0',
  username: 'root',
  password: 'root',
  db: 'wcloud'
})