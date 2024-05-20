import { DefaultButton } from '@fluentui/react'
import { FC } from 'react'
import { ButtonProps } from '../../types'

const Button: FC<ButtonProps> = ({ text, href = '', className, ...props }) => {
  return (
    <DefaultButton
      href={href}
      className={`bg-blue-400 border-0 text-white hover:bg-blue-500 hover:text-white rounded-md ${className}`}
      {...props}
    >
      {text}
    </DefaultButton>
  )
}

export default Button
