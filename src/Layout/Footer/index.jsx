import React from 'react'
import "./index.scss"

function Footer() {
    return (
        <div className='Footer'>
            <div className='footerMain'>
                <div className="categories"><h3 className='main'>CATEGORIES</h3><ul className='pages'>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Shoes</li>
                    <li>Watches</li>

                </ul></div>
                <div className="help"><h3 className='main'>HELP</h3><ul className='pages'>
                    <li>Track Order</li>
                    <li>Returns</li>
                    <li>Shipping</li>
                    <li>FAQ</li>

                </ul></div>
                <div className="getInTouch"><h3 className='main'>Get In Touch</h3><p className='text'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p> <div className="icons"><i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-pinterest-p"></i></div></div>
                <div className="newsLetter">
                    <div className="main">News Letter</div>
                    <input className='input' type="text" placeholder='example@gmail.com' />
                    <button className='btn'>Subscribe</button>


                </div>
            </div>
            <div className="footerFoot">
                <div className="image"><img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png" alt="" />
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png" alt="" />
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png" alt="" />
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png" alt="" />
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png" alt="" /></div>
                    <p className='byMahammad'>Copyright ©2023 All rights reserved | This template is made with  by Mahammad</p>
            </div>
        </div>
    )
}

export default Footer