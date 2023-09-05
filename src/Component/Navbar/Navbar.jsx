import React from 'react'
import { FaBars } from "react-icons/fa";
import { 
    Container,
     VStack,
 Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,} from '@chakra-ui/react'
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();



// function Navbar() {
  return (
    <div>
<VStack>
  <Container maxW='xlg' bg='blue.600' h={'75px'} color='white' >

  <Flex
        h="75px"
        bg="brand.800"
        justify="space-between"
        align="center"
        px={4}
      >
        <IconButton
          onClick={onOpen}
          ref={btnRef}
          variant="ghost"
          color="white"
          _hover={{ bg: "main.400" }}
          fontSize="3xl"
        >
          <FaBars />
        </IconButton>
        <Menu>
          <MenuButton>
            <Avatar />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Setting</MenuItem>
          </MenuList>
        </Menu>
        {/* <Popover>
          <PopoverTrigger>
            <Avatar />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              <List>
                <ListItem>Profile</ListItem>
                <ListItem>Setting</ListItem>
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover> */}
      </Flex>


  </Container>
  
  
</VStack>

    </div>
  )
}

export default Navbar