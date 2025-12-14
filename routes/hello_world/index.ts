import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
    return c.json({ message: 'Hello World' }, 200)
})

export default app
