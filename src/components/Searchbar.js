

const Searchbar = ({collection ,updater}) =>{
 
  const handleDelivery = () => {
      const filteredData = collection.filter((restaurant) => {
        return restaurant?.info?.veg
      })
      updater(filteredData);
    }
  
    const handleVeg = () => {
      const filteredData = collection.filter((restaurant) => {
        return restaurant?.info?.sla?.deliveryTime <= 30
      })
      updater(filteredData);
    }
    const handleRating = () => {
      const filteredData = collection.filter((restaurant) => {
        return restaurant?.info?.avgRating >= 4.5
      })
      updater(filteredData);
    }
    const reset = () => {
      updater(collection)
    }
    return(
      <div>

        {/* <div>
          <button className="btn btn-sm-light" onClick={filterData}>🔍</button>
        </div> */}
      <div>
             <button className="btn btn-sm btn-light" onClick={handleDelivery}>Fast Delivery</button>
             <button className="btn btn-sm btn-dark" onClick={handleVeg}>Pure Veg</button>
             <button className="btn btn-sm btn-light" onClick={handleRating}>Top rated</button>
             <button className="btn btn-sm btn-dark" onClick={reset}>Show all</button>
           </div>
           </div>
          
       
    
    );
  };
  export default Searchbar;