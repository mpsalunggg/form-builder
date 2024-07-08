import { Modal, Stack } from '@fluentui/react'
import { Dismiss12Filled } from '@fluentui/react-icons'
import { FC } from 'react'
import useModalStore from '../../hooks/useModalStore'

const TaskModal: FC = () => {
  const { isOpen, title, modalBody, closeModal } = useModalStore()
  return (
    <Modal
      isOpen={isOpen}
      onDismiss={closeModal}
      containerClassName="rounded-md border-t-4 border-blue-400 w-96 min-h-24"
    >
      <Stack className="flex flex-row justify-between items-center p-4">
        <h1 className="text-xl font-semibold text-blue-400">{title}</h1>
        <Dismiss12Filled onClick={closeModal} className="cursor-pointer" />
      </Stack>
      {modalBody}
    </Modal>
  )
}

export default TaskModal
