import { Stack } from '@fluentui/react'
import { Add16Filled } from '@fluentui/react-icons'
import { FC, useCallback } from 'react'
import Alert from '../../components/Alert'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import TaskModal from '../../components/TaskModal'
import useModalStore from '../../hooks/useModalStore'
import ModalBody from './components/ModalBody'
import TaskList from './components/TaskList'
import { useTesting } from './hooks'

const Task: FC = () => {
  const { data: testing } = useTesting()
  console.log('Testing', testing)

  const openModal = useModalStore((state) => state.openModal)

  const handleAddButtonClick = useCallback(() => {
    openModal('Add New Task', <ModalBody buttonText="Add" />, 'CREATE')
  }, [])

  return (
    <Stack>
      <Stack.Item className="bg-blue-400 w-full h-36 lg:px-96 px-4 flex items-end">
        <div className="w-full flex items-center justify-between h-12 mb-4">
          <div>
            <h1 className="lg:text-3xl text-lg font-semibold text-white">
              Manage Your Tasks Efficiently
            </h1>
            <Menu />
          </div>
          <Button
            className="bg-white text-blue-400 hover:text-blue-400 w-12 h-10 flex items-center justify-center"
            startIcon={<Add16Filled className="m-0 w-4 h-4" />}
            onClick={handleAddButtonClick}
            text="Add"
          />
        </div>
      </Stack.Item>
      <Stack.Item className="relative lg:px-96 p-4 w-full">
        <Alert />
      </Stack.Item>
      <Stack.Item className="lg:px-96 px-4 my-4">
        <TaskList />
      </Stack.Item>
      <TaskModal />
    </Stack>
  )
}
export default Task
