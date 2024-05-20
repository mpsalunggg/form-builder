import { DefaultButton } from '@fluentui/react'
import { FC } from 'react'
import { ButtonProps } from '../../types'

const Button: FC<ButtonProps> = ({
  text,
  href = '',
  startIcon,
  className,
  ...props
}) => {
  return (
    <DefaultButton
      href={href}
      className={`border-0 p-0 rounded-md ${className}`}
      style={{maxWidth: 12}}
      {...props}
    >
      {startIcon}
      {text}
    </DefaultButton>
  )
}

export default Button
