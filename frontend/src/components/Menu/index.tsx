import { Link, Stack } from '@fluentui/react'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { MenuLink } from '../../constants/menu'

const Menu: FC = () => {
  const location = useLocation()
  return (
    <Stack className="flex-row gap-2">
      {MenuLink.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`text-white italic ${
            location.pathname === item.href && 'text-blue-900 underline'
          }`}
        >
          {item.title}
        </Link>
      ))}
    </Stack>
  )
}
export default Menu
