import { FC } from 'react'
import { Stack } from '@fluentui/react'
import Button from '../../../components/Button'
import useModalStore from '../../../hooks/useModalStore'

const ModalDelete: FC = () => {
  const closeModal = useModalStore((state) => state.closeModal)
  return (
    <Stack className="flex-row justify-end gap-2 px-4 mb-4">
      <Button className="border-[1px]" text="Cancel" onClick={closeModal} />
      <Button
        className="text-white hover:text-white bg-red-500 hover:bg-red-400"
        text="Delete"
      />
    </Stack>
  )
}
export default ModalDelete
