import { Delete12Filled, Edit12Filled } from '@fluentui/react-icons'
import { FC } from 'react'
import { CardListType } from '../../../types'

const CardList: FC<CardListType> = ({
  item,
  measureRef,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <li
      className="hover:bg-gray-200 p-4 flex justify-between items-center"
      ref={measureRef}
    >
      <div>
        <h1 className="text-blue-400 text-xl">{item?.title}</h1>
        <div>{item?.description}</div>
      </div>
      <div>
        <Edit12Filled
          className="w-6 h-6 text-blue-500 cursor-pointer"
          onClick={() => handleEditClick(item)}
        />
        <Delete12Filled
          className="w-6 h-6 text-red-500 cursor-pointer"
          onClick={() => handleDeleteClick(item)}
        />
      </div>
    </li>
  )
}
export default CardList
