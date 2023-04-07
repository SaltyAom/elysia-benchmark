import { drizzle } from 'drizzle-orm/node-postgres'
import { integer, pgTable } from 'drizzle-orm/pg-core'
import { Pool } from 'pg'

export const worlds = pgTable('World', {
    id: integer('id').primaryKey(),
    randomNumber: integer('full_name').notNull()
})

const pool = new Pool({
    connectionString: 'postgres://postgres:12345678@localhost:5432/db'
})

export const db = drizzle(pool)
