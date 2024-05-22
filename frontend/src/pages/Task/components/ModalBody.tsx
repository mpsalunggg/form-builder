import { Stack, TextField } from '@fluentui/react'
import { FC, useState, useEffect, useCallback } from 'react'
import Button from '../../../components/Button'
import useModalStore from '../../../hooks/useModalStore'
import { ModalBodyProps } from '../../../types'
import { useCreateTask } from '../hooks'

const ModalBody: FC<ModalBodyProps> = ({ buttonText = 'Submit' }) => {
  const { type, data } = useModalStore()
  const { mutate } = useCreateTask()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [titleError, setTitleError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')

  useEffect(() => {
    setTitle(data?.title || '')
    setDescription(data?.description || '')
  }, [data])

  const validateForm = useCallback(() => {
    let isValid = true

    if (!title) {
      setTitleError('Title is required')
      isValid = false
    } else {
      setTitleError('')
    }

    if (!description) {
      setDescriptionError('Description is required')
      isValid = false
    } else {
      setDescriptionError('')
    }

    return isValid
  }, [title, description])

  const handleSubmit = () => {
    if (validateForm()) {
      if (type === 'CREATE') {
        mutate({ title, description })
      }
    }
  }

  return (
    <Stack className="p-4 mb-4 flex flex-col gap-4">
      <Stack.Item className="flex flex-col gap-4">
        <TextField
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
          placeholder="Description"
          multiline
          required
          value={description}
          onChange={(_, newValue) => {
            setDescription(newValue || '')
            if (newValue) {
              setDescriptionError('')
            }
          }}
          errorMessage={descriptionError}
        />
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
