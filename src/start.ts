import { cpus } from 'os'

const threads = cpus().length - 1

for (let i = 0; i < threads; i++)
    Bun.spawn({
        cmd: ['bun', 'src/index.ts'],
        env: {
            ENV: 'production',
            NODE_ENV: 'production'
        }
    })

console.log(`Running ${threads} threads`)
