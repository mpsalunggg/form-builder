import { useEffect } from 'react'
import { FocusZone, FocusZoneDirection } from '@fluentui/react'
import Loading from '../../../components/Loading'
import useModalStore from '../../../hooks/useModalStore'
import { ListTaskType } from '../../../types'
import ModalBody from './ModalBody'
import ModalDelete from './ModalDelete'
import useOnScreen from '../../../hooks/useOnScreen'
import { useGetAllTasks } from '../hooks'
import CardList from './CardList'

const TaskList = () => {
  const openModal = useModalStore((state) => state.openModal)
  const { measureRef, isIntersecting, observer } = useOnScreen()

  const handleDeleteClick = (task: ListTaskType) => {
    openModal('Delete Task!', <ModalDelete />, 'DELETE', task)
  }

  const handleEditClick = (task: ListTaskType) => {
    openModal('Edit Task!', <ModalBody buttonText="Edit" />, 'EDIT', task)
  }

  const {
    data: dataTasks,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetAllTasks()

  const newData = dataTasks?.pages[dataTasks?.pages.length - 1]
  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage()
      observer.disconnect()
    }
  }, [isIntersecting, hasNextPage])

  if (newData?.length === 0) {
    return <p>No more tasks to load</p>
  }

  return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      {newData?.map((item: ListTaskType, index: number) => {
        if (index === newData?.length - 1) {
          return (
            <CardList
              item={item}
              key={item.id}
              measureRef={measureRef}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          )
        }
        return (
          <CardList
            item={item}
            key={item.id}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        )
      })}
      {isFetchingNextPage && <Loading />}
    </FocusZone>
  )
}

export default TaskList
