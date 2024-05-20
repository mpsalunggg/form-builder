import { FC } from 'react'
import { Stack } from '@fluentui/react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Home: FC = () => {
  return (
    <Stack className="w-full h-screen">
      <Stack.Item className={`bg-blue-400 h-1/2`}>
        <div className="flex items-end justify-center backdrop-blur-sm w-full h-full pb-4 ">
          <div className="flex items-center">
            <h1 className="text-white lg:text-5xl text-2xl font-poppins font-semibold drop-shadow-lg text-center">
              Task Management App
            </h1>
          </div>
        </div>
      </Stack.Item>
      <Stack.Item className="flex gap-2 flex-col items-center justify-center m-4">
        <p className="italic text-center lg:text-sm text-xs">
          <span className="text-red-500">*</span>This app was created to fulfill
          the recruitment process at the{' '}
          <Link
            className="text-blue-800 underline"
            to={'https://www.kitameraki.com/id/'}
            target="_blank"
          >
            Kitameraki
          </Link>{' '}
          company
        </p>
        <Button
          className="bg-blue-400 border-0 text-white hover:bg-blue-300 hover:text-white rounded-md"
          text="Let's Started"
        />
      </Stack.Item>
    </Stack>
  )
}
export default Home
