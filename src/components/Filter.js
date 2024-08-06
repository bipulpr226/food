import { useState } from "react";



const Filter = ({collection, updater}) =>{
  const [searchtext,setSearchtext]=useState("")

  const handleSearchText = (e) => {
    console.log("function is called", searchtext)
    setSearchtext(e.target.value)
    // dsfxgcv
  }
  const filterData = () => {
    const filteredData = collection.filter((restaurant) => {
      return restaurant?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
    })
    console.log("filteredData", filteredData);
    updater(filteredData);
  }

  // const [setRestaurantData,restaurantCollection]=useState("")
  // const handleDelivery = () => {
  //   const filteredData = restaurantCollection.filter((restaurant) => {
  //     return restaurant?.info?.veg
  //   })
  //   setRestaurantData(filteredData);
  // }

  // const handleVeg = () => {
  //   const filteredData = restaurantCollection.filter((restaurant) => {
  //     return restaurant?.info?.sla?.deliveryTime <= 30
  //   })
  //   setRestaurantData(filteredData);
  // }
  // const handleRating = () => {
  //   const filteredData = restaurantCollection.filter((restaurant) => {
  //     return restaurant?.info?.avgRating >= 4.5
  //   })
  //   setRestaurantData(filteredData);
  // }
  // const reset = () => {
  //   setRestaurantData(restaurantCollection)
  // }
    return(
      <div className="container my-4">
      <input type="text"
        className="custom_input"
        placeholder="Enter name of restaurant"
        value={searchtext}
        onChange={handleSearchText} />
        <div>
      <button className="btn btn-sm btn-light" onClick={filterData}>🔍</button></div>
    </div>
    // <div className="d-flex justify-between">
    //  <div>
    //       <button className="btn btn-sm btn-light" onClick={handleDelivery}>Fast Delivery</button>
    //       <button className="btn btn-sm btn-dark" onClick={handleVeg}>Pure Veg</button>
    //       <button className="btn btn-sm btn-light" onClick={handleRating}>Top rated</button>
    //       <button className="btn btn-sm btn-dark" onClick={reset}>Show all</button>
    //     </div>
    // </div>
  
    );
  };
  export default Filter;