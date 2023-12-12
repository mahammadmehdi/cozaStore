import React from 'react'
import CategoryProduct from '../../components/categoryProduct'
import "./index.scss"
import ProductCard from '../../components/productCard'


function Home() {
   

   
    return (
        <>
            <div className='cards'><CategoryProduct season={"Spring 2018"} category={"Women"} image={"https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg"}></CategoryProduct>
                <CategoryProduct season={"Spring 2018"} category={"Men"} image={"https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg"}></CategoryProduct>
                <CategoryProduct season={"New Trend"} category={"Accessories"} image={"https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg"}></CategoryProduct></div>

           <div className='products'> <h2>Product Overview</h2>
            <div className='filterPage'>
                <ul className='page'><li>All Products</li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Bag</li>
                    <li>Shoes</li>
                    <li>Watches</li></ul>
                    <div className='button'>
                        <div className='filter'><i class="fa-solid fa-filter"></i>Filter</div>
                        <div className='search'><i class="fa-solid fa-magnifying-glass"></i>Search</div>
                    </div>
                    
            </div>
            <ProductCard></ProductCard>
            

            </div>
        </>

    )
}

export default Home