import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'


const SortCategory = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        
      </MenuButton>
      <MenuList>
        
      </MenuList>
    </Menu>
  )
}

export default SortCategory