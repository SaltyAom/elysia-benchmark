import { Elysia } from 'elysia'
import { db, worlds } from './schema'
import { singleQuery } from './db'

const app = new Elysia()
    .onAfterHandle(({ set }) => {
        set.headers.server = 'Elysia'
        set.headers.date = new Date().toLocaleString()
    })
    .get('/', () => 'A')
    .get('/single', async () =>
        singleQuery
            .execute({
                id: Math.floor(Math.random() * 10000) + 1
            })
            .then((x) => x[0])
    )
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
