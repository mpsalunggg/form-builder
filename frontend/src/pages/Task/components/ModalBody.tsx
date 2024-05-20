import { Stack, TextField } from '@fluentui/react'
import { FC } from 'react'
import Button from '../../../components/Button'
import { ListTaskType } from '../../../types'

const ModalBody: FC<{ buttonText?: string; data?: ListTaskType }> = ({
  buttonText,
  data,
}) => {
  return (
    <Stack className="px-4 mb-4 flex flex-col gap-4">
      <Stack.Item className="flex flex-col gap-4">
        <TextField placeholder="Title" required value={data?.title} />
        <TextField
          placeholder="Description"
          multiline
          required
          value={data?.description}
        />
      </Stack.Item>
      <Stack.Item className="flex justify-end">
        <Button
          className="bg-blue-400 text-white hover:bg-blue-300 hover:text-white rounded-md"
          text={buttonText}
        />
      </Stack.Item>
    </Stack>
  )
}
export default ModalBody
