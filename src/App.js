import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'
import ViewItem from './Component/ViewItem';



function App() {
  return (
    <ChakraProvider>
    <div>
 <Routes>
         <Route path="/" element = {<Dashboard />}/>
         <Route path="/viewitem" element = {<ViewItem />}/>


    </Routes>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
