import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './server/routes/auth'
import repositoryRoutes from './server/routes/repositories'
import aiRoutes from './server/routes/ai'
import integrationRoutes from './server/routes/integrations'
import usersRoutes from './server/routes/users'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// CORS configuration for frontend domains
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:3000',
      // Will be updated with actual Vercel frontend domain
      process.env.FRONTEND_URL || 'http://localhost:3000',
    ],
    credentials: true,
  })
)
app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'GitVerse API is running' })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/repositories', repositoryRoutes)
app.use('/api/ai', aiRoutes)
app.use('/api/integrations', integrationRoutes)
app.use('/api/users', usersRoutes)

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`GitVerse API running on port ${PORT}`)
})
