import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {loadProvider,loadNetwork, loadMedical } from './store/interactions';
import  config  from "./config.json";
function App() {
 const dispatch=useDispatch();
const loadBlockchainDate=async()=>{
 const provider=loadProvider(dispatch);
 const chainId=await loadNetwork(provider,dispatch);
 const medical_config=config[chainId].medical;
 const medical =await loadMedical(provider,
  medical_config.address,
  dispatch
);
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
