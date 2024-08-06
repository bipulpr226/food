import Restaurantcard from "./Restaurantcard";

import { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";
import useRestaurant from "../hooks/useRestaurant";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import useOnline from "../hooks/useOnline";

const Cardcontainer = () => {
 

  const [count, setcount] = useState(0)
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [restaurantCollection, setRestaurantCollection] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [isFailed, setIsFailed] = useState(false)
  const resObject=useRestaurant();
  console.log("resObject",resObject);
  console.log("restaurantlist", restaurantData)

  // const handleSearchText = (e) => {
  //   console.log("function is called", searchtext)
  //   setSearchtext(e.target.value)
  //   // dsfxgcv
  // }
  // const filterData = () => {
  //   const filteredData = restaurantCollection.filter((restaurant) => {
  //     return restaurant?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
  //   })
  //   console.log("filteredData", filteredData);
  //   setRestaurantData(filteredData);
  // }
  const handleDelivery = () => {
    const filteredData = restaurantCollection.filter((restaurant) => {
      return restaurant?.info?.veg
    })
    setRestaurantData(filteredData);
  }

  const handleVeg = () => {
    const filteredData = restaurantCollection.filter((restaurant) => {
      return restaurant?.info?.sla?.deliveryTime <= 30
    })
    setRestaurantData(filteredData);
  }
  const handleRating = () => {
    const filteredData = restaurantCollection.filter((restaurant) => {
      return restaurant?.info?.avgRating >= 4.5
    })
    setRestaurantData(filteredData);
  }
  const reset = () => {
    setRestaurantData(restaurantCollection)
  }
 
  console.log("component is rendered")

  
// const data =useRestaurant()

  if (resObject?.loading) {
    return (
      <div className="container d-flex flex-wrap gap-5"><Shimmer />
      </div>

    )

  }
  if (resObject?.failed) {
    return (
      <div className="container-div">
        {/* <h1>Something went wrong</h1> */}
        <img src="https://www.webhopers.com/wp-content/uploads/2017/02/How-to-Deal-with-the-404-Error-for-Search-Engine-Optimization.jpg" />
      </div>
    )


  }
  return (
    <div>
      <div className="d-flex justify-between">
        <Filter collection={resObject.masterData} updater={resObject?.updater}/>
        {/* <div className="container my-4">
          <input type="text"
            className="custom_input"
            placeholder="Enter name of restaurant"
            value={searchtext}
            onChange={handleSearchText} />
          <button className="btn btn-sm btn-light" onClick={filterData}>🔍</button>
        </div> */}
        {/* <div>
          <button className="btn btn-light" onClick={filterData}>🔍</button>
        </div> */}
        {/* <div>
          <button className="btn btn-sm btn-light" onClick={handleDelivery}>Fast Delivery</button>
          <button className="btn btn-sm btn-dark" onClick={handleVeg}>Pure Veg</button>
          <button className="btn btn-sm btn-light" onClick={handleRating}>Top rated</button>
          <button className="btn btn-sm btn-dark" onClick={reset}>Show all</button>
        </div> */}
         <Searchbar collection={resObject.masterData} updater={resObject?.updater}/>
      </div>


      <div className="container d-flex flex-wrap gap-5">


        {resObject?.resData.length !== 0 ? resObject?.resData && resObject?.resData.map((restaurant) => {
          return (

            <Restaurantcard
              key={restaurant?.info?.id}

              {...restaurant?.info}
            />
          );

        }) : <img src="https://thumbs.dreamstime.com/b/oops-emoticon-vector-illustration-over-white-56744303.jpg" />

        }</div>
    </div>




  );
};

export default Cardcontainer;