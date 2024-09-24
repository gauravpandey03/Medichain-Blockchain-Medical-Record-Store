import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Option from './components/option/option';
import  Data from './components/Data/Data';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {loadProvider,loadNetwork, loadMedical, subscribeToEvents } from './store/interactions';
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
subscribeToEvents(medical,dispatch);
};

 useEffect(()=>{
  loadBlockchainDate();
 });
  return (
   <div className='App'> 
   <Navbar/>
   <Option/>
   <Routes>
    <Route path="/" exact element={<Form/>} />
    <Route path="/Data" exact element={<Data/>} />
   </Routes>
   <Form/>
   </div>
  );
}

export default App;
