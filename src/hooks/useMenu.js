import { useState,useEffect } from "react";



const useMenu=(id)=>{
// logic to fetch menu data//

const [menuData, setMenuData] = useState([]);

const getMenucard = async () => {
    try {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
       // setLoading(false)
        setMenuData(json?.data?.cards)

        console.log('json', json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        // setLoading(false);
        // console.log("json",json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setRestaurantData(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setRestaurantCollection(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    catch (err) {
        //   setLoading(false)
        //   setIsFailed(true)
        console.log("something went wrong", err)
    }
}

useEffect(() => {
    getMenucard();
}, []);
return menuData

}
export default useMenu;