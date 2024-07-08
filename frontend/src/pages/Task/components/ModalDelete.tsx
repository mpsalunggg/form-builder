import { FC } from 'react'
import { Stack } from '@fluentui/react'
import Button from '../../../components/Button'
import useModalStore from '../../../hooks/useModalStore'
import { useDeleteTask } from '../hooks'

const ModalDelete: FC = () => {
  const { mutate } = useDeleteTask()
  const { closeModal, data } = useModalStore()
  return (
    <Stack className="flex-row justify-end gap-2 px-4 mb-4">
      <Button className="border-[1px]" text="Cancel" onClick={closeModal} />
      <Button
        className="text-white hover:text-white bg-red-500 hover:bg-red-400"
        text="Delete"
        onClick={() => mutate(data?.id)}
      />
    </Stack>
  )
}
export default ModalDelete
