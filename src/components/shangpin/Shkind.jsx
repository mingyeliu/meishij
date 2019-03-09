import React from 'react'
import {Link} from 'react-router-dom'

const Comp = ({list, classn2})=>(
  <div className="jiajuList">
  {
  list.map((item,index)=>{
    return(
      <div className={classn2} key={index}>
        <div className="small_food_list " >
          < Link to={'/j/cart/'+item.id}>
            <img src={item.image} alt="tupian" />1
            
          </Link>
        </div>
      </div>
      )
    })
  }
  </div>
)
   

export default Comp