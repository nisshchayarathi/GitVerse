import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from '../server/routes/auth'
import repositoryRoutes from '../server/routes/repositories'
import aiRoutes from '../server/routes/ai'
import integrationRoutes from '../server/routes/integrations'
import usersRoutes from '../server/routes/users'

dotenv.config()

const app = express()

// Middleware
app.use(
  cors({
    origin: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  })
)
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'GitVerse API is running' })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/repositories', repositoryRoutes)
app.use('/api/ai', aiRoutes)
app.use('/api/integrations', integrationRoutes)
app.use('/api/users', usersRoutes)

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err)
  res.status(500).json({ error: 'Internal server error' })
})

export default app
