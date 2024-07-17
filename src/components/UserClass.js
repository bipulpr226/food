import React from 'react'

class UserClass extends React.Component{
    constructor(){
        super()
        
        this.state={
        count:0,
      
    }}
   
render(){
    return(
        <div style={{border:"1px solid black"}}>
    <div>Name:Mr. Bipul  </div>
    <div>Country:India  </div>
    <div>Email id:hi@bipul</div>
    <div>Count:{this.state.count}</div>
    <button onClick={()=>{this.setState(({count:this.state.count+1}))
     }}>Increase</button>
</div>
    )
}
}
    export default UserClass