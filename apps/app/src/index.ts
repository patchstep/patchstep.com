import { Hono } from 'hono'

const app = new Hono()

// redirect to ffm.bio
app.get('*', async (c) => {
  return c.redirect('https://ffm.bio/patch')
})

export default app
