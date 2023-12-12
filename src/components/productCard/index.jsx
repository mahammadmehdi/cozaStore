import React, { useContext } from 'react'
import "./index.scss"
import { useState } from 'react'
import { useEffect } from 'react'
import Modal from '../Modal'
import { WishlistContext } from '../../context/wishlistContext'

function ProductCard() {
  const [product, setProduct] = useState([])
  const [openModalID, setOpenModalID] = useState(null)
  const { AddWishlist} = useContext(WishlistContext)


  useEffect(() => {
    fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])
  // console.log(product);
  function viewModal(id) {
    setOpenModalID(id)
  }
  function closeModal() {
    setOpenModalID(null)
  }

  return (
    <div className='productCart'><div className='cart'>
      {product.map((x) => <ul className='carts'>
        <img className='image' src={x.images} />
        <div className='detail'><div className='text'><li className='name'>{x.name.slice(0, 20)}</li>
          <li>{x.price}$</li></div>
          <div className="heart" onClick={()=>AddWishlist(x)}>
          <i class="fa-regular fa-heart" ></i>
          </div>
          <button id="myBtn" onClick={()=>viewModal(x.id)}>Quick View</button>
          
         
        </div>
      </ul>)}
    </div>
          <div className='modal'>{openModalID !== null ? <Modal id={openModalID} closeModal={closeModal}></Modal> : null}</div>
      </div>
  )
}

export default ProductCard