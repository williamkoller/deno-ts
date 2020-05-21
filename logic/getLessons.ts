import Class from '../model/class.ts'
import { client } from '../config/database/data.ts'

export default async (): Promise<Class[]> => {
  const register = await client.query('SELECT id, name FROM lessons')
    const lessons: Class[] = register.map((reg: any): Class =>{
      return {
        id: reg.id,
        name: reg.name
      }
    })
    return lessons
}