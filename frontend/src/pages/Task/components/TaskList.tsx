import { FocusZone, FocusZoneDirection, List, Stack } from '@fluentui/react'
import { useBoolean } from '@fluentui/react-hooks'
import { Delete12Filled, Edit12Filled } from '@fluentui/react-icons'
import { useCallback, useState } from 'react'
import Loading from '../../../components/Loading'
import TaskModal from '../../../components/TaskModal'
import { ListTaskType } from '../../../types'
import { useGetAllTasks } from '../hooks'
import ModalBody from './ModalBody'
import ModalDelete from './ModalDelete'

const TaskList = () => {
  const { data: dataTasks, isLoading } = useGetAllTasks()

  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false)
  const [modalType, setModalType] = useState<string>('')
  const [selectedTask, setSelectedTask] = useState<ListTaskType | null>(null)

  const handleDeleteClick = (task: ListTaskType) => {
    setSelectedTask(task)
    setModalType('delete')
    showModal()
  }

  const handleEditClick = (task: ListTaskType) => {
    setSelectedTask(task)
    setModalType('edit')
    showModal()
  }

  const onRenderCell = useCallback((item?: ListTaskType) => {
    return (
      <Stack className="hover:bg-gray-200 p-4 flex-row justify-between items-center">
        <Stack.Item>
          <h1 className="text-blue-400 text-xl">{item?.title}</h1>
          <div>{item?.description}</div>
        </Stack.Item>
        <Stack.Item>
          <Edit12Filled
            className="w-6 h-6 text-blue-500 cursor-pointer"
            onClick={() => handleEditClick(item!)}
          />
          <Delete12Filled
            className="w-6 h-6 text-red-500 cursor-pointer"
            onClick={() => handleDeleteClick(item!)}
          />
        </Stack.Item>
      </Stack>
    )
  }, [])

  const onRenderModal = useCallback(() => {
    if (!selectedTask) return null

    const modalContent =
      modalType === 'delete' ? (
        <ModalDelete hideModal={hideModal} />
      ) : (
        <ModalBody buttonText="Edit" data={selectedTask} />
      )

    const modalTitle =
      modalType === 'delete' ? 'Delete this task?' : 'Edit Task'

    return (
      <TaskModal
        isOpen={isModalOpen}
        onDismiss={hideModal}
        title={modalTitle}
        modalBody={modalContent}
      />
    )
  }, [isModalOpen, selectedTask, modalType, hideModal])

  if (isLoading) {
    return <Loading />
  }

  return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      <List items={dataTasks?.data?.tasks} onRenderCell={onRenderCell} />
      {onRenderModal()}
    </FocusZone>
  )
}

export default TaskList
