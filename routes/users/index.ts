import { Hono } from 'hono'

const app = new Hono()

// GET /api/users - ユーザー一覧取得
app.get('/', c => {
  return c.json([
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
  ])
})

// GET /api/users/:id - ユーザー詳細取得
app.get('/:id', c => {
  const id = c.req.param('id')
  return c.json({
    id: parseInt(id),
    name: `User ${id}`,
    email: `user${id}@example.com`,
  })
})

// POST /api/users - ユーザー作成
app.post('/', async c => {
  const body = await c.req.json()
  return c.json(
    {
      id: Date.now(),
      ...body,
    },
    201
  )
})

// PUT /api/users/:id - ユーザー更新
app.put('/:id', async c => {
  const id = c.req.param('id')
  const body = await c.req.json()
  return c.json({
    id: parseInt(id),
    ...body,
  })
})

// DELETE /api/users/:id - ユーザー削除
app.delete('/:id', c => {
  const id = c.req.param('id')
  return c.json({ message: `User ${id} deleted` })
})

export default app
