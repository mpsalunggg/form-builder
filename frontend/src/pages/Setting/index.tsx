import { Stack } from '@fluentui/react'
import { FC, useCallback, useEffect, useState } from 'react'
import Alert from '../../components/Alert'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import TaskModal from '../../components/TaskModal'
import { getInput, saveInput } from '../../helpers'
import useAlertStore from '../../hooks/useAlertStore'
import { FieldType } from '../../types'
import LayoutSetting from './components/LayoutSetting'

const Setting: FC = () => {
  const [optionalFields, setOptionalFields] = useState<FieldType[]>([])
  const showAlert = useAlertStore((state) => state.showAlert)
  const handleSave = useCallback(() => {
    saveInput(optionalFields)
    showAlert('Success save input!', 'success', 3000)
  }, [optionalFields])

  useEffect(() => {
    const inputFromLocal = getInput()
    if (inputFromLocal) {
      setOptionalFields(JSON.parse(inputFromLocal))
    }
  }, [])
  return (
    <Stack>
      <Stack.Item className="bg-blue-400 w-full h-36 lg:px-96 px-4 flex items-end">
        <div className="w-full flex items-center justify-between h-12 mb-4">
          <div>
            <h1 className="lg:text-3xl text-lg font-semibold text-white">
              Setting your input form
            </h1>
            <Menu />
          </div>
          <Button
            className="bg-white text-blue-400 hover:text-blue-400 w-12 h-10 flex items-center justify-center"
            text="Save"
            onClick={handleSave}
          />
        </div>
      </Stack.Item>
      <Stack.Item className="lg:px-96 px-4 mt-2">
        <Alert />
        <LayoutSetting
          optionalFields={optionalFields}
          setOptionalFields={setOptionalFields}
        />
      </Stack.Item>
      <Stack.Item>
        <TaskModal />
      </Stack.Item>
    </Stack>
  )
}
export default Setting
