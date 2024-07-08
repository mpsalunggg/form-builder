import { Router } from 'express'
import {
  createTask,
  deleteTask,
  editTask,
  getTasks,
} from '../controllers/task.controller'

const router = Router()

router.get('/tasks', getTasks)
router.post('/task', createTask)
router.delete('/task/:id', deleteTask)
router.put('/task/:id', editTask)

export default router
