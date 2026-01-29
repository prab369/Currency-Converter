import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
   const [amount,setAmount]=useState(0);
   const [from, setFrom]=useState("usd");
   const [to,setTo]=useState("inr");


  return (
    <>
       
       
    </>
  )
}

export default App;
