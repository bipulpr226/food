

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
      <div >
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-200 rounded" onClick={handleDelivery}>Quick Fast</button>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleVeg}>Pure Veg</button>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleRating}>Top rated</button>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={reset}>Show all</button>
           </div>
           </div>
          
       
    
    );
  };
  export default Searchbar;