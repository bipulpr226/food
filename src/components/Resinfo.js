const Resinfo=({name, avgRating, cuisines, delieveryTime, distance, costForTwo, ratingCount, remark,city})=>{
    return(
    //  <div className="space menu_container info_container">
    //     <h1>{name}</h1>
    //     <p>⭐{avgRating} ({ratingCount}) <span>-</span> {costForTwo}</p>
    //     <p className="text-danger text-decoration-underline">{cuisines}</p>
    //     <p className="text-lowecase">{delieveryTime}</p>
    //  <p>🚲 {remark.replace(/<\/?b>/g, "")}.</p>
    //  </div>   
<div className ="w-full">
    <div className="w-[800px] mx-auto pt-8">
    <h1 className="font-bold pt-6 text-2xl">{name}</h1>
    <div className="w-full h-[270px] bg-gradient-to-t p-5 from-slate-200/70 mt-3 rounded-[30px]">
<div className="w-full  p-4 border-slate-200/70 rounded-[30px] h-full bg-white">
<p>⭐{avgRating} ({ratingCount}) <span>-</span> {costForTwo}
</p>
<p className="underline font-semibold text-orange-600">{cuisines}</p>
<p className="text-lowecase">{delieveryTime}</p>
  <p>🚲 {remark.replace(/<\/?b>/g, "")}.</p>
</div>
    </div>
    </div>
</div>
    )
}
export default Resinfo