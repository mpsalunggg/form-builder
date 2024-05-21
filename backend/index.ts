import express, { Request, Response, Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import taskRoutes from './routes/task.route'
import { errorMiddleware } from './middlewares/error.middleware'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Setup Backend')
})

app.use('/api', taskRoutes)
app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})
