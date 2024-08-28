import { IMG_URL, Menu_URL } from "../const/config"

const MenuSection=({isVeg, name, costForTwo, avgRating, ratingCount, description, imageUrl,handleAdd })=>{
return(
    <div className="d-flex justify-content-between align-items-center">
<div className="menu_container">
    <p>{isVeg ? "🌿":"🍗"}</p>
<h6 className="space">{name}</h6>
<h6 className="space">Rs.{costForTwo}</h6>
{avgRating &&<p className="text-success">⭐{avgRating} <span>({ratingCount})</span></p>}
<p className="p">{description}</p>

</div>
<div  className="relative h-full w-[20%]">
    <img style={{width:"150px",height:"150px",objectFit:"cover",borderRadius:"20px" }} src={IMG_URL+imageUrl}/>

    <button class="bg-white rounded-xl absolute bottom-[-10px] left-5 text-lg text-black-700 font-bold px-4 py-2 drop-shadow"   type="button" onClick={handleAdd}> <h5 className=" fw-bold m-0 py-1 "> ADD</h5> </button>
</div>


    </div>



)


}

export default MenuSection