import React, { useContext } from 'react'
import "./index.scss"
import { WishlistContext } from '../../context/wishlistContext'
import { BasketContext } from '../../context/basketContext'

function Wishlist() {

  const { wishlist,AddWishlist} = useContext(WishlistContext)
  const { AddBasket} = useContext(BasketContext)




  return (
    <div className='basketpage'>

    { <div className='page'><div className='cards'>
      {wishlist
        .map((x) =>(

          <ul className='card'>
            <li className='image'><img src={x.images} /><div className='cardHover'>

              <i class="fa-regular fa-heart" onClick={()=>{AddWishlist(x)}}></i>
              <i class="fa-solid fa-cart-shopping" onClick={()=>AddBasket(x)}></i>
            </div></li>
            <h2 className='name'>{x.name.slice(0,20)}</h2>
            <h3 className='cost'>${x.price} <span className='discount'></span></h3>
             
         
          </ul>)
        )}
        
    </div></div>
     }


  </div>
  )
}

export default Wishlist