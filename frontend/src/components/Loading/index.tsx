import { Spinner } from '@fluentui/react'
import { FC } from 'react'

const Loading: FC = () => {
  return <Spinner label="Waiting..." size={3} />
}
export default Loading
