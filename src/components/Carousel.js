import React, {useEffect,useState} from "react";



function Carousel(){
  const [data,setData]=useState([]);
  async function fetchData(){
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const result = await data.json();
console.log(result?.data?.cards[0]?.card?.card?.imageGridCards.info);
setData(result?.data?.cards[0]?.card?.card?.imageGridCards.info)
}
  useEffect (()=> {
fetchData()

  },[])
    return(
      <div  className="w-full">
        <div className="w-[75%] mx-auto ">
          {
            data.map((item)=>(
<img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt=""/>

            ))
          }

        </div>
      </div>
    );
  };
  export default Carousel;