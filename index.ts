import { writeFileStrSync } from "https://deno.land/std/fs/mod.ts"
import getLessons from './logic/getLessons.ts'

const lessons = await getLessons()
const contents = lessons.map(lesson => `${lesson.id} - ${lesson.name}`).join('\n')

writeFileStrSync('./class.txt', contents)
