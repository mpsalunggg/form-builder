import express, { Request, Response, Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import taskRoutes from './routes/task.route'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Setup Backend')
})

app.use('/api', taskRoutes)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})