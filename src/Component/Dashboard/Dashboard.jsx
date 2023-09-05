import React from 'react'
import { Grid, GridItem , VStack} from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../Navbar/Navbar'
import Cart from '../Cart/Cart'
import Sidebar from "../Sidebar/Sidebar"

function Dashboard() {
  return (
    <div><>
    <Navbar/>
    <Cart/>
    <Sidebar/>


    </></div>
  )
}

export default Dashboard