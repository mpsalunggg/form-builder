import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Setting from '../pages/Setting'
import Task from '../pages/Task'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task" element={<Task />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  )
}

export default AppRoutes
