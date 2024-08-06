import React, {useEffect,useState} from "react";



function Carousel(){
  const [data,setData]=useState([]);
  const []=useState(0);
  async function fetchData(){
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const result = await data.json();
console.log(result?.data?.cards[0]?.card?.card?.imageGridCards.info);
setData(result?.data?.cards[0]?.card?.card?.imageGridCards.info)
}
  useEffect (()=> {
fetchData()

  },[])

  function handleNext(){

  }

  function handlePrev(){


  }
    return(
      <div  className="w-full ">
        <div className='w-[45%] d-flex flex-row mt-3 border'>
          <div className="d-flex gap-3 ">
            <div onClick={handlePrev}>
            <i class="fa-solid fa-arrow-left"></i>

            </div>
          <div onClick={handleNext}>
          <i class="fa-solid fa-arrow-right"></i>

          </div>
          </div>
          {
            data.map((item)=>(
<img className='w-6'src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt=""/>

            ))
          }

        </div>
      </div>
    );
  };
  export default Carousel;