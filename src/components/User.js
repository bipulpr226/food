import { useState } from "react"

const User=()=>{
    const [count,setCount]=useState(1);
    
return(
<div>
    <div>Name:Mr. Bipul  </div>
    <div>Country:India  </div>
    <div>Email id:hi@bipul</div>
    <div>Count:{count}</div>
   <button onClick={()=>{setCount(count+1)}}>Increase</button>
</div>

)

}
export default User