import { DatePicker, SpinButton, Stack, TextField } from '@fluentui/react'
import { FC, useState, useEffect, useCallback } from 'react'
import Button from '../../../components/Button'
import { getInput } from '../../../helpers'
import useModalStore from '../../../hooks/useModalStore'
import { FieldType, ModalBodyProps } from '../../../types'
import { useCreateTask, useEditTask } from '../hooks'

const ModalBody: FC<ModalBodyProps> = ({ buttonText = 'Submit' }) => {
  const [optionalFields, setOptionalFields] = useState<FieldType[]>([])
  const { type, data } = useModalStore()
  const { mutate: mutateCreate } = useCreateTask()
  const { mutate: mutateEdit } = useEditTask()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [dataForm, setDataForm] = useState<any>({})
  const [titleError, setTitleError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')

  useEffect(() => {
    setTitle(data?.title || '')
    setDescription(data?.description || '')
  }, [data])

  useEffect(() => {
    const inputFromLocal = getInput()
    if (inputFromLocal) {
      setOptionalFields(JSON.parse(inputFromLocal))
    }
  }, [])

  const validateForm = useCallback(() => {
    let isValid = true

    if (!title) {
      setTitleError('Title is required')
      isValid = false
    } else {
      setTitleError('')
    }

    return isValid
  }, [title, description])

  const handleSubmit = () => {
    if (validateForm()) {
      if (type === 'CREATE') {
        mutateCreate({ title, description, ...dataForm })
      } else {
        mutateEdit({ id: data?.id, data: { title, description, ...dataForm } })
      }
    }
  }

  const handleChangeForm = (newValue?: any, field?: FieldType) => {
    setDataForm({
      ...dataForm,
      [field?.label as string]: newValue,
    })
  }

  const renderField = (field: FieldType) => {
    switch (field.type) {
      case 'TextField':
        return (
          <TextField
            label={field.label}
            key={field.id}
            placeholder={field.label}
            className="w-full"
            defaultValue={type !== 'CREATE' && data[field.label as string]}
            onChange={(_, newValue?: string) =>
              handleChangeForm(newValue, field)
            }
          />
        )
      case 'DatePicker':
        return (
          <DatePicker
            label={field.label}
            key={field.id}
            placeholder={
              type !== 'CREATE'
                ? new Date(data[field.label as string]).toDateString()
                : field.label
            }
            className="w-full"
            onSelectDate={(date) => handleChangeForm(date, field)}
          />
        )
      case 'SpinButton':
        return (
          <SpinButton
            label={field.label}
            key={field.id}
            labelPosition={0}
            className="w-full"
            defaultValue={
              type !== 'CREATE' ? data[field?.label as string] : undefined
            }
            onChange={(_, newValue?: string) =>
              handleChangeForm(newValue, field)
            }
          />
        )
      default:
        return null
    }
  }

  return (
    <Stack className="p-4 mb-4 flex flex-col gap-4">
      <Stack.Item className="flex flex-col gap-2">
        <TextField
          label="Title"
          placeholder="Title"
          required
          value={title}
          onChange={(_, newValue) => {
            setTitle(newValue || '')
            if (newValue) {
              setTitleError('')
            }
          }}
          errorMessage={titleError}
        />
        <TextField
          label="Description"
          placeholder="Description"
          multiline
          value={description}
          onChange={(_, newValue) => {
            setDescription(newValue || '')
          }}
        />
        {optionalFields.length !== 0 && (
          <>
            <h1 className="text-blue-400 mt-3">Optional Form</h1>
            {optionalFields.map((field) => {
              return renderField(field)
            })}
          </>
        )}
      </Stack.Item>
      <Stack.Item className="flex justify-end">
        <Button
          className="bg-blue-400 text-white hover:bg-blue-300 hover:text-white rounded-md"
          text={buttonText}
          onClick={handleSubmit}
        />
      </Stack.Item>
    </Stack>
  )
}

export default ModalBody
