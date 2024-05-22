import { MessageBar, MessageBarType, Stack } from '@fluentui/react'
import {
  CheckmarkCircle20Filled,
  ErrorCircle20Filled,
} from '@fluentui/react-icons'
import { FC } from 'react'
import useAlertStore from '../../hooks/useAlertStore'

const renderIcon: Record<string, JSX.Element> = {
  success: <CheckmarkCircle20Filled />,
  error: <ErrorCircle20Filled />,
}

const Alert: FC = () => {
  const { isOpen, description, status } = useAlertStore()

  if (!isOpen) return null

  return (
    <Stack className="sticky">
      <MessageBar messageBarType={MessageBarType[status]}>
        <div className="flex flex-row items-center gap-2">
          <div>{renderIcon[status]}</div>
          <p>{description}</p>
        </div>
      </MessageBar>
    </Stack>
  )
}

export default Alert
