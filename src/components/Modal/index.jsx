import React, { useContext, useEffect, useState } from 'react'

import "./index.scss"
import { BasketContext } from '../../context/basketContext'
import { WishlistContext } from '../../context/wishlistContext'




function Modal({ id, closeModal }) {

  const [image, setImage] = useState([])
  const { basket,AddBasket,increase,decrease,RemoveItem,getTotalPrice} = useContext(BasketContext)
  const {AddWishlist}=useContext(WishlistContext)
  console.log(id);
 const item = basket.find(x=>x.id === id)
 console.log(basket);
  useEffect(() => {
    fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/" + id)
      .then((res) => res.json())
      .then((data) => setImage(data))
  }, [])
  return (
    <>
<div className='modal'><div className='openModal'>
        <div className='closeModal' onClick={closeModal}>X</div>
        <div className='image'><img src={image.images} /></div>
        <div className='detail'>
          <div className='category'>Lightweight Jacket</div>
          <div className='price'>$58.79</div>
          <p className='about'>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
          <div className='size'>Size: <select name="Choose option" id=""><option value="">Size S</option><option value="">Size M</option><option value="">Size L</option><option value="">Size XL</option></select><input type="text" /></div>
          <div className='color'>Color: <select name="Choose option" id=""><option value="">RED</option><option value="">BLUE</option><option value="">WHITE</option><option value="">Size GREY</option></select><input type="text" /></div>
          <div className='basket'>
            <div className='count'><button onClick={()=>{decrease(image)}}>-</button><span className='counter'> 
            {item ? item.count : "0"}</span><button onClick={()=>{increase(image)}}>+</button></div>
            <button className='addCart' onClick={()=>{AddBasket(image)}}>Add to Cart</button>
          </div>
          <div className='sosialMedia'>
            <i class="fa-regular fa-heart" onClick={()=>AddWishlist}></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google-plus-g"></i>

          </div>
        </div>

      </div>
      </div>

    </>
  )
}

export default Modal