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
<div>
    <img style={{width:"150px",height:"150px",objectFit:"cover",borderRadius:"20px" }} src={IMG_URL+imageUrl}/>
<br></br>
    <button class="button" onClick={handleAdd}>Add to cart</button>
</div>


    </div>



)


}

export default MenuSection