import { db, worlds } from './schema'
import { eq } from 'drizzle-orm/expressions'
import { placeholder } from 'drizzle-orm'

// const seedWorlds = () =>
//     db
//         .insert(worlds)
//         .values(
//             new Array(10_000).fill(null).map((_, i) => ({
//                 id: i + 1,
//                 randomNumber: Math.floor(Math.random() * 10_000) + 1
//             }))
//         )
//         .returning()

// seedWorlds().then(console.log)

export const singleQuery = db
    .select({
        id: worlds.id,
        randomNumber: worlds.randomNumber
    })
    .from(worlds)
    .where(eq(worlds.id, placeholder('id')))
    .prepare('singleQuery')
