import {
  DatePicker,
  PrimaryButton,
  SpinButton,
  Stack,
  TextField,
} from '@fluentui/react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Dispatch, FC, SetStateAction } from 'react'
import useModalStore from '../../../hooks/useModalStore'
import ModalBody from './ModalBody'
import { FieldType } from '../../../types'
import { randomNumber } from '../../../helpers'

const initialComponents = [
  { id: '1', type: 'TextField' },
  { id: '2', type: 'DatePicker' },
  { id: '3', type: 'SpinButton' },
]

const LayoutSetting: FC<{
  optionalFields: FieldType[]
  setOptionalFields: Dispatch<SetStateAction<FieldType[]>>
}> = ({ optionalFields, setOptionalFields }) => {
  const { openModal, closeModal } = useModalStore()

  const onDragEnd = async (result: any) => {
    const { source, destination } = result
    if (!destination) return

    const fields = Array.from(optionalFields)

    if (
      source.droppableId === 'components' &&
      destination.droppableId === 'fields'
    ) {
      const newField = {
        ...initialComponents[source.index],
        id: `${Date.now()}`,
        label: `Field-${randomNumber()}`,
      }
      fields.splice(destination.index, 0, newField)
      openModal(
        'Add label input!',
        <ModalBody
          saveLabel={saveLabel}
          fields={fields}
          currentField={newField}
        />,
        'CREATE_LABEL'
      )
    } else if (
      source.droppableId === 'fields' &&
      destination.droppableId === 'fields'
    ) {
      const [movedField] = fields.splice(source.index, 1)
      fields.splice(destination.index, 0, movedField)
    }
    setOptionalFields(fields)
  }

  const saveLabel = (
    fields: FieldType[],
    currentLabel: string,
    current: FieldType
  ) => {
    const data = fields.map((field: any) =>
      field?.id === current?.id ? { ...field, label: currentLabel } : field
    )
    setOptionalFields(data)
    closeModal()
  }

  const removeField = (id: string) => {
    setOptionalFields(optionalFields.filter((field) => field.id !== id))
  }

  const renderField = (field: FieldType) => {
    switch (field.type) {
      case 'TextField':
        return (
          <TextField
            label={field.label}
            placeholder={field.label}
            className="w-full"
            disabled
          />
        )
      case 'DatePicker':
        return (
          <DatePicker
            label={field.label}
            placeholder={field.label}
            className="w-full"
            disabled
          />
        )
      case 'SpinButton':
        return (
          <SpinButton
            label={field.label}
            labelPosition={0}
            className="w-full"
            disabled
          />
        )
      default:
        return null
    }
  }

  return (
    <Stack.Item>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="components">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="w-full my-4 border-b"
            >
              <h1 className="text-blue-400 text-lg font-semibold">
                Please drag the input component for your form
              </h1>
              <div className="w-full flex gap-2 justify-between my-4">
                {initialComponents.map((component, index) => (
                  <Draggable
                    key={component.id}
                    draggableId={component.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="w-full bg-gray-300 h-12 flex justify-center items-center hover:bg-gray-200"
                        style={{
                          ...provided.draggableProps.style,
                        }}
                      >
                        {component.type}
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="fields">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h1 className="text-blue-400 text-lg font-semibold">
                My form setting
              </h1>
              <div className="border-b pb-4">
                <TextField label="Title" placeholder="Title" disabled />
                <TextField
                  label="Description"
                  placeholder="Description"
                  multiline
                  disabled
                />
              </div>
              <div
                className={`w-full ${
                  !optionalFields.length &&
                  'flex justify-center items-center bg-gray-100 h-24'
                } my-4`}
              >
                {!optionalFields.length ? (
                  <h1>Drop your optional input form</h1>
                ) : (
                  <div className="min-h-96 border border-gray-400">
                    {optionalFields.map((field, index) => (
                      <Draggable
                        key={field.id}
                        draggableId={field.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex gap-2 justify-between items-end p-2 border bg-white border-gray-400 m-4"
                            style={{
                              ...provided.draggableProps.style,
                            }}
                          >
                            {renderField(field)}
                            <PrimaryButton
                              text="Remove"
                              onClick={() => removeField(field.id)}
                              className={`${
                                field.type === 'DatePicker' && 'mb-[4px]'
                              }`}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Stack.Item>
  )
}

export default LayoutSetting
