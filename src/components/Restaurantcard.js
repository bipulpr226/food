
const Restaurantcard = () =>{
 // imgUrl, title, starRating, deliveryTime, cuisines, location
//  console.log("props",props);
    return(
      <div className="custom-card">
      <div>
        <img src ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" width="100%"/>
      </div>
      <h2>resturant name</h2>
      
     
       <div className="d-flex justify-content-between">
        <div>⭐4.5</div>
        <div>40-45min</div>
        </div>
        <div>chinese, indian,Tibetan,Desserts</div>
        <div>Bhandup West</div>
      
       
       </div>
     );
   };




  export default Restaurantcard;
