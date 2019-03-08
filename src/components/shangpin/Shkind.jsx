import React from 'react'
import {Link} from 'react-router-dom'

const Comp = ({list, classn2})=>(
  <div className="jiajuList">
  {
  list.map((item,index)=>{
    return(
      <div className={classn2} key={item.id}>
        <div className="small_food_list " >
          < Link to="/">
            <img src={item.image} alt="tupian" />
          </Link>
        </div>
        </div>
      )
    })
  }
  </div>
)
   

export default Comp