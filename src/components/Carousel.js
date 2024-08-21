 import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

import {useState,useEffect} from "react";



 
  const Carousel =() =>{
    const [categories,setCategories]=useState([]);
    const [data,setData]=useState(0);
    const fetchCategory=async()=>{
      const response=await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const data = await response.json();
      console.log ("json",data?.data?.cards[0]?.card?.card?.imageGridCards?.info)
      setCategories(data?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    }
  
    useEffect(()=>{
      fetchCategory();
    },[])

    function handleNext(){
       setData((prev)=> prev+31)
    }
   function handlePrev(){
     setData((prev)=> prev-31)
   }
   
    return(
      <div className="w-full " > 
      <div className="w-[80%] mx-auto mt-2 mb-2  overflow-hidden">
      <div className="flex justify-between mt-3 ">
        <h3>What's in your Mind ?</h3>
        <div className="flex gap-2">
            <div onClick={handlePrev} className={` cursor-pointer rounded-full w-8 h-8 flex justify-center item-center ` + (data <= 0 ? "bg-gray-100":"bg-gray-200")}>
            <FaArrowLeft className={` text-xl mt-1 `+ (data <= 0 ? "text-gray-200":"text-gray-800")}/></div>
            <div onClick={handleNext} className={` cursor-pointer rounded-full w-8 h-8 flex justify-center item-center ` + (data >=0 ? "bg-gray-100":"bg-gray-200")}>
            <FaArrowRight className={` text-xl mt-1 `+ (data >= 0 ? "text-gray-200":"text-gray-800")}/></div>
        </div>
      </div>
      <hr/>

		<div style={{translate:`-${data}%`}}className= "flex  duration-1000" >
        	{
        		categories.map((item)=>(
        			<img className="w-[150px]"src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}/>
        			))
         
        	}
        </div>
        <hr/>
		</div>
        
		</div>
		);
};


  export default Carousel