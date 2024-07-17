import { useParams } from "react-router-dom";
// import { Menu_URL } from "../const/config";
import { useState, useEffect } from "react";
import Resinfo from "./Resinfo";
import Shimmer from "./Shimmer";
import MenuSection from "./MenuSection";
export const Menu = () => {

    //  const params = useParams();
    const {id} = useParams();
    // console.log('params', params);
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMenucard = async () => {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await data.json();
            setLoading(false)
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
    }, [])
    if (loading) {
        return (
            <div className="container d-flex flex-wrap gap-4">
                <Shimmer />
            </div>)
    }
    const menuCategories=menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
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
    const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, sla, expectationNotifiers } = menuData[2]?.card?.card?.info
    const { slaString, lastMileTravelString } = sla;
    const { enrichedText } = expectationNotifiers[0]
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
                    {
normalMenu.map((normalCategory)=>{
return(
<>
<h5 key={normalCategory?.card?.card?.title}>{normalCategory?.card?.card?.title}</h5>
{
normalCategory?.card?.card?.itemCards.map((dish)=>{
return(
    <>
    <MenuSection
isVeg={dish?.card?.info?.isVeg}
 name={dish?.card?.info?.name}
 costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100 }
 avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
 ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
 description={dish?.card?.info?.description}
 imageUrl ={dish?.card?.info?.imageId}



/>
<hr/>
</>

)

})
}
{/* <MenuSection
isVeg={normalCategory?.card?.card?.itemCards[0]?.card?.info?.isVeg}
 name={normalCategory?.card?.card?.itemCards[0]?.card?.info?.isVeg?.name}
 costForTwo={normalCategory?.card?.card?.itemCards[0]?.card?.info?.defaultPrice/100}
 avgRating={normalCategory?.card?.card?.itemCards[0]?.card?.info?.ratings?.aggregatedRating?.rating}
 ratingCount={normalCategory?.card?.card?.itemCards[0]?.card?.info?.ratings?.aggregatedRating?.ratingCount}
 description={normalCategory?.card?.card?.itemCards[0]?.card?.info?.description}
 imageUrl ={normalCategory?.card?.card?.itemCards[0]?.card?.info?.imageId}



/> */}
</>

)

})


                    }
                
                <div>
{
    nestedMenu.map((category)=>{
return(
    <div>
    <h4 className="space">{category?.card?.card?.title}</h4>
    {
        category?.card?.card?.categories.map((subCategory)=>{
return(
    <>
    <h5 className="text-secondary space">{subCategory?.title}</h5>
    {
subCategory?.itemCards.map((dish)=>{
return(
    <>
    <MenuSection
    isVeg={dish?.card?.info?.isVeg}
     name={dish?.card?.info?.name}
     costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100 }
     avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
     ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
     description={dish?.card?.info?.description}
     imageUrl ={dish?.card?.info?.imageId}
    />
    <hr/>
    </>
)


})

    }
    </>
    
)


        })
    }
    </div>
)

    })
}

                </div>
</div>
        </div>

    )
}
export default Menu
