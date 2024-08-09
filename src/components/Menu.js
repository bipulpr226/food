import { useParams } from "react-router-dom";
// import { Menu_URL } from "../const/config";
import { useState, useEffect } from "react";
import Resinfo from "./Resinfo";
import Shimmer from "./Shimmer";
import MenuSection from "./MenuSection";
import useMenu from "../hooks/useMenu";
import NormalMenu from "./NormalMenu";
import NestedMenu from "./NestedMenu";
export const Menu = () => {

    
    const {id} = useParams();
    
    const menuList =useMenu(id);
    console.log("custom hook data",menuList);
//const menuList = useMenu();
  const [activeIndex,setActiveIndex]=useState(0);
    if (menuList.length===0) {
        return (
            <div className="container d-flex flex-wrap gap-4">
                <Shimmer />
            </div>)
    }
    const menuCategories=menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const normalMenu= menuCategories.filter((menuCategory)=>{
        return(
            menuCategory?.card?.card["@type"]=== 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    });
    const nestedMenu= menuCategories.filter((menuCategory)=>{
        return(
            menuCategory?.card?.card["@type"]=== 
 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
        );
    });
    console.log("normalMenu",normalMenu);
    console.log("nestedMenu", nestedMenu);
    const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, sla, expectationNotifiers } = menuList[2]?.card?.card?.info
    const { slaString, lastMileTravelString } = sla;
    const { enrichedText } = expectationNotifiers[0];
    const showDetails = (val)=>
        {if (activeIndex===val){
        setActiveIndex(-1)
    }
    else
    {
        setActiveIndex(val);
    }
    }
    return (
        <div>
            <Resinfo 
                name={name}
                avgRating={avgRating}
                ratingCount={totalRatingsString}
                costForTwo={costForTwoMessage}
                cuisines={cuisines.join(", ")}
                delieveryTime={slaString}
                distance={lastMileTravelString}
                remark={enrichedText} />
                <div className="space menu_container p-3">
                     {normalMenu.map((normalCategory,index)=>{
return(

<NormalMenu normalCollection={normalCategory} isActive={activeIndex===index} toggleFunction={()=>showDetails(index)}/>
);

})
 } 

                </div>
                <div className="space menu_container p-3">

{
    nestedMenu.map((category)=>{
return(
   <NestedMenu collection={category}/>
)

    })
}

                </div>
{/* </div> */}
        </div>

    )
}
export default Menu
