import { FocusZone, FocusZoneDirection, List, Stack } from '@fluentui/react'
import { Delete12Filled, Edit12Filled } from '@fluentui/react-icons'
import { useCallback } from 'react'
import Loading from '../../../components/Loading'
import useModalStore from '../../../hooks/useModalStore'
import { ListTaskType } from '../../../types'
import { useGetAllTasks } from '../hooks'
import ModalBody from './ModalBody'
import ModalDelete from './ModalDelete'

const TaskList = () => {
  const openModal = useModalStore((state) => state.openModal)
  const { data: dataTasks, isLoading } = useGetAllTasks()

  const handleDeleteClick = (task: ListTaskType) => {
    openModal('Delete Task!', <ModalDelete />, 'DELETE', task)
  }

  const handleEditClick = (task: ListTaskType) => {
    openModal('Edit Task!', <ModalBody buttonText="Edit" />, 'EDIT', task)
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

  if (isLoading) {
    return <Loading />
  }
  if (!dataTasks?.data) {
    return <p>{dataTasks?.message}</p>
  }
  return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      <List items={dataTasks?.data?.tasks} onRenderCell={onRenderCell} />
    </FocusZone>
  )
}

export default TaskList
