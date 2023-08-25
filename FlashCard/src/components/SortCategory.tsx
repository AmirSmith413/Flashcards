import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'

interface Props{
  onSelectSortCategory:(sortCategory: string) => void
  sortCategory:string
}

const SortCategory = ({onSelectSortCategory,sortCategory}:Props) => {
  const sortCategories = [
    { value: "", label: "Video Games" },
    { value: "-books", label: "Books" },
    { value: "general-knowledge", label: "General Knowledge" },
    { value: "-released", label: "History" },
    { value: "-rating", label: "Television" },
  ]
  const currentSortCategory = sortCategories.find(order => order.value === sortCategory)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        Category: {currentSortCategory?.label || 'Video Games'}
      </MenuButton>
      <MenuList>
        {sortCategories.map((order) => (
          <MenuItem
          onClick={() => onSelectSortCategory(order.value)}
          key={order.value}
          value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortCategory