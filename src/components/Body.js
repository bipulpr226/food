import Carousel from "./Carousel";
import Filter from "./Filter";
import Searchbar from "./Searchbar";
import Cardcontainer from "./Cardcontainer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const Body = () =>{
  const [name, setName] = useState("Bipul")
    return(
      <>
      <div className="text-center"> </div>
      <Carousel/>
      <div className="d-flex justify-content-between">
        
         {/* <Searchbar/>  */}
        {/* <Filter/> */}
      </div>
     <Cardcontainer author={name}/>
     </>
    );
    
    };
    export default Body;