import { FC } from 'react'
import { Stack } from '@fluentui/react'
import Button from '../../../components/Button'

const ModalDelete: FC<{ hideModal: () => void }> = ({ hideModal }) => {
  return (
    <Stack className="flex-row justify-end gap-2 px-4 mb-4">
      <Button className="border" text="Cancel" onClick={hideModal} />
      <Button
        className="text-white hover:text-white bg-red-500 hover:bg-red-400"
        text="Delete"
      />
    </Stack>
  )
}
export default ModalDelete
