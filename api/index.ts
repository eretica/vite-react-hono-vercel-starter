import { Hono } from 'hono'
// import時は.jsをつける
import helloWorld from '../routes/hello_world/index.js'
import users from '../routes/users/index.js'

export const config = { 
    runtime: 'nodejs'
 }

const app = new Hono().basePath('/api')

// ヘルスチェックエンドポイント
app.get('/health', async (c) => {
    return c.json('im fine thank you and you?', 200)
})

app.get('/', async (c) => {
    return c.json('ok', 200)
})

app.route('/hello_world', helloWorld)
app.route('/users', users)

export default app
