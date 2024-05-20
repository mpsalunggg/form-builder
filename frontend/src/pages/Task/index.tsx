import { Stack } from '@fluentui/react'
import { useBoolean } from '@fluentui/react-hooks'
import { Add16Filled } from '@fluentui/react-icons'
import { FC } from 'react'
import Button from '../../components/Button'
import TaskModal from '../../components/TaskModal'
import ModalBody from './components/ModalBody'
import TaskList from './components/TaskList'

const Task: FC = () => {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false)
  return (
    <Stack>
      <Stack.Item className="bg-blue-400 w-full h-36 lg:px-96 px-4 flex items-end">
        <div className="w-full flex items-center justify-between h-12 mb-4">
          <h1 className="lg:text-3xl text-lg font-semibold text-white">
            Manage Your Tasks Efficiently
          </h1>
          <Button
            className="bg-white text-blue-400 hover:text-blue-400 w-12 h-10 flex items-center justify-center"
            startIcon={<Add16Filled className="m-0 w-4 h-4" />}
            onClick={showModal}
            text="Add"
          />
        </div>
      </Stack.Item>
      <Stack.Item className="lg:px-96 px-4 my-4">
        <TaskList />
      </Stack.Item>
      <TaskModal
        isOpen={isModalOpen}
        onDismiss={hideModal}
        title="Add New Task"
        modalBody={<ModalBody buttonText="Add" />}
      />
    </Stack>
  )
}
export default Task
