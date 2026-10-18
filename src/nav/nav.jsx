import React, { useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
const Nav = ({show,showProducts,showCart,cart=[]}) => {
    return (
        <>
            <nav className='flex items-center justify-between bg-white px-8 py-3 shadow'>
                <div className='flex items-center gap-3'>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-900'>
                            ShopStyle
                        </h1>
                        <p className='text-sm text-gray-500'>
                            React + LocalStorage Demo
                        </p>
                    </div>
                </div>
                    <div className="flex gap-2">
                        <button onClick={showProducts}
                            className={`px-6 py-2 rounded-full font-bold transition ${show ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700"}`}>
                            <i className="fa-solid fa-bag-shopping mr-2"></i>Products
                        </button>
                        <button onClick={showCart}
                            className={`px-6 py-2 rounded-full font-bold transition ${!show ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700"}`}>
                            <i className="fa-solid fa-cart-shopping mr-2"></i>Cart History
                            Cart({cart.length})
                            </button> 
                    </div>
            </nav>
        </>
    )
}

export default Nav