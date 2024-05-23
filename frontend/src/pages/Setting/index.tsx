import { Stack } from '@fluentui/react'
import { FC } from 'react'
import Button from '../../components/Button'

const Setting: FC = () => {
  return (
    <Stack>
      <Stack.Item className="bg-blue-400 w-full h-36 lg:px-96 px-4 flex items-end">
        <div className="w-full flex items-center justify-between h-12 mb-4">
          <h1 className="lg:text-3xl text-lg font-semibold text-white">
            Setting your input form
          </h1>
          <Button
            className="bg-white text-blue-400 hover:text-blue-400 w-12 h-10 flex items-center justify-center"
            text="Save"
          />
        </div>
      </Stack.Item>
    </Stack>
  )
}
export default Setting
