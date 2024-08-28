

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
      <div className="container  d-flex gap-3 text-black " >

       
      
             <button className="bg-white rounded-xl left-5 text-lg text-green-700 font-bold px-2 py-2 drop-shadow" onClick={handleDelivery}>Quick Fast</button>
             <button className="bg-white rounded-xl left-5 text-lg text-green-700 font-bold px-2 py-1 drop-shadow" onClick={handleVeg}>Pure Veg</button>
             <button className="bg-white rounded-xl left-5 text-lg text-green-700 font-bold px-2 py-1 drop-shadow" onClick={handleRating}>Top rated</button>
             <button className="bg-white rounded-xl left-5 text-lg text-green-700 font-bold px-2 py-1 drop-shadow" onClick={reset}>Show all</button>
           </div>
           
          
       
    
    );
  };
  export default Searchbar;