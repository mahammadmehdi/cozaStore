import React from 'react'
import "./index.scss"

function CategoryProduct({season,category,image}) {
  return (
    <div className='card'>
<div className='cardText'><h3>{category}</h3>
<div className='season'>{season}</div></div>
<div className='cardImage'><img src={image} /></div>
    </div>
  )
}

export default CategoryProduct