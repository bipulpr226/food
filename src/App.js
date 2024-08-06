import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useOnline from './hooks/useOnline';
import log from "./assets/images/offline-internet-icon-vector-off-network-symbol-concept-278814203.webp"

const App = () => {
  const isOnline=useOnline();
  if(!isOnline){
    return <img src={log}/>
  }

  return (
    <>
   <Header/>
{/* <Ro   uterProvider router={appRouter}/> */}
<Outlet/>
   <Footer/> 
   </>

  );
}

export default App;
