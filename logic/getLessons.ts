import { Client } from "https://deno.land/x/mysql/mod.ts?"
import Class from '../model/class.ts'

export default async (): Promise<Class[]> => {
  const client = await new Client().connect({
    hostname: '0.0.0.0',
    username: 'root',
    password: 'root',
    db: 'wcloud'
  })
  
  const register = await client.query('SELECT id, name FROM lessons')
  const lessons: Class[] = register.map((reg: any): Class =>{
    return {
      id: reg.id,
      name: reg.name
    }
  })
  return lessons
}