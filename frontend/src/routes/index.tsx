import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Task from '../pages/Task'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task" element={<Task />} />
    </Routes>
  )
}

export default AppRoutes
