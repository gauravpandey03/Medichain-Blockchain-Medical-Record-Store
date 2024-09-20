import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {loadProvider,loadNetwork } from './store/interactions';

function App() {
 const dispatch=useDispatch();
const loadBlockchainDate=async()=>{
 const provider=loadProvider(dispatch);
 console.log(provider);
 const chainId=await loadNetwork(provider,dispatch);
};

 useEffect(()=>{
  loadBlockchainDate();
 });
  return (
   <div className='App'> 
   <Navbar/>
   <Form/>
   </div>
  );
}

export default App;
