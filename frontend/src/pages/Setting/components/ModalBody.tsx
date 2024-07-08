import { DefaultButton, PrimaryButton, Stack, TextField } from '@fluentui/react'
import { FC, useState } from 'react'
import useModalStore from '../../../hooks/useModalStore'
import { FieldType } from '../../../types'

const ModalBody: FC<{
  saveLabel: (
    fields: FieldType[],
    currentLabel: string,
    currentField: FieldType
  ) => void
  fields: FieldType[]
  currentField: FieldType
}> = ({ saveLabel, fields, currentField }) => {
  const { closeModal } = useModalStore()
  const [currentLabel, setCurrentLabel] = useState<string>('Field')
  const handleLabelChange = (_: unknown, newValue?: string) => {
    setCurrentLabel(newValue as string)
  }
  return (
    <Stack className="px-4 mb-4 flex flex-col gap-4">
      <TextField label="Field Label" onChange={handleLabelChange} required />
      <Stack.Item className="flex justify-end gap-2">
        <PrimaryButton
          onClick={() => saveLabel(fields, currentLabel, currentField)}
          text="Save"
        />
        <DefaultButton onClick={() => closeModal()} text="Cancel" />
      </Stack.Item>
    </Stack>
  )
}
export default ModalBody
