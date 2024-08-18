import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useOnline from './hooks/useOnline';
import log from "./assets/images/offline-internet-icon-vector-off-network-symbol-concept-278814203.webp"
import {useEffect, useState} from 'react'
import UserContext from "./utils/UserContext";
import { Provider } from 'react-redux';
import appStore from './utils/store';

const App = () => {
  const [name, setName] = useState("")

  useEffect(()=>{
    //api call for authentication
    const data = "nitesh"
    setName(data)
  }, [])
  const isOnline=useOnline();
  if(!isOnline){
    return <img src={log}/>
  }

  return (
    <Provider store={appStore}>
<UserContext.Provider value={name}/>
   <Header/>
{/* <Ro   uterProvider router={appRouter}/> */}
<Outlet/>
   <Footer/> 
   </Provider>

  );
}

export default App;
