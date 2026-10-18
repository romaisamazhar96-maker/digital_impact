import React from "react";
import { useState } from "react";
import Shoes from "../../assets/shoes.avif";
import Hat from "../../assets/Hat.jpg";
import Nav from "../../nav/nav";
import Jacket from "../../assets/jacket.avif";
import Glasses from "../../assets/glasses.avif";
import Jeans from "../../assets/jeans.avif";
import Watch from "../../assets/watch.avif";
const Shop = () => {
const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("mycart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [show, setShow] = useState(true);
    const products = [
        {
            id: 1,
            name: "Classic Running Sneaker",
            description: "Lightweight, breathable sports sneakers designed for maximum comfort.",
            price: 200,
            image: Shoes
        },
        {
            id: 2,
            name: "Sun Protection Straw Hat",
            description: "Stylish beach sun hat crafted from high-grade woven straw.",
            price: 200,
            image: Hat
        },
        {
            id: 3,
            name: "Leather Jacket",
            description: "Premium stylish jacket perfect for winter outdoor wear.",
            price: 200,
            image: Jacket
        },
        {
            id: 4,
            name: "Classic Sunglasses",
            description: "UV protection classic and stylish sunglasses for outdoor fashion.",
            price: 200,
            image: Glasses
        },
        {
            id: 5,
            name: "Denim Jeans",
            description: "Essentials Men's Relaxed-Fit Jeans Machine Wash Warm, Tumble Dry Low HEAVYWEIGHT RIGID DENIM",
            price: 200,
            image: Jeans
        },
        {
            id: 6,
            name: "Luxury Watch",
            description: "Luxury Gold Snake Bracelet Watch for Women - Trendy Serpent Coil Bangle Watch with Dual Dial",
            price: 200,
            image: Watch
        }
    ];
    
    const showProducts = () => {
        setShow(true)
    };
    const showCart = () => {
        setShow(false)
    };
    const updateCartState = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem("mycart", JSON.stringify(updatedCart))
        console.log("Updated Cart Items (localStorage Sync):", updatedCart)
    }
    const handleAddToCart = (Product) => {
        alert('Your Order Have Been Carted.');
        const existingItemIndex = cart.findIndex((item) => item.id === Product.id);
        let newCart;
        if (existingItemIndex > -1) {
            newCart = cart.map((item, index) =>
                index === existingItemIndex
                    ? { ...item, quantity: item.quantity + 1 }
                    : item);
        } else {
            newCart = [...cart, { ...Product, quantity: 1 }]
        }
        updateCartState(newCart);
    };
    const handleIncreaseQuantity = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
        updateCartState(updatedCart)
    };
    const handledecreaseQuantity = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        })
            .filter((item) => item.quantity > 0);
        updateCartState(updatedCart)
    };
    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        updateCartState(updatedCart)
    };
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    return (
        <div className="min-h-screen bg-amber-400 p-6">
            <Nav
                show={show}
                showProducts={showProducts}
                showCart={showCart}
                cart={cart} />
            {show && (
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Featured Products</h2>
                        <p className="text-gray-800 font-medium">DEsigned with accurate Style.Click "ADD TO CART" to test localstorage & console Output!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {products.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-3xl shadow-md">
                                <img src={item.image} alt={item.name}
                                    className="w-full h-48 object-contain rounded-xl mb-4 bg-slate-50 p-4" />
                                <h3 className="font-bold text-xl text-gray-800">{item.name}</h3>
                                <p className="text-gray-800 font-medium">{item.description}</p>
                                <div className="flex justify-between items-center mt-6 pt-4 border-t">
                                    <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                                    <button onClick={() => handleAddToCart(item)}
                                        className="bg-amber-500 text-white font-bold px-6 py-4 rounded-xl hover:bg-amber-600 transition">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {!show && (
                <div className="max-w-md mx-auto bg-white p-6 rounded-3xl shadow-md mt-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Order Description</h2>
                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">Your Cart is Currently Empty.</p>) : (
                        <div>
                            <div className="divide-y divide-gray-100">
                                {cart.map((item, index) => (
                                    <div key={item.id} className="py-3 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.image} alt={item.name}
                                                className="w-12 h-12 object-cover rounded-xl" />
                                            <div>
                                                <p className="font-bold text-gray-800">{item.name}</p>
                                                <p className="text-xs text-gray-500">
                                                    ${item.price} x {item.quantity} =<span className="font-semibold text-gray-800">${item.price * item.quantity}</span></p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center border rounded-lg bg-gray-50">
                                                <button
                                                    onClick={() => handledecreaseQuantity(item.id)}
                                                    className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded-l-lg font-bold">-</button>
                                                <span className="px-3 font-semibold text-gray-800">{item.quantity}</span>
                                                <button
                                                    onClick={() => handleIncreaseQuantity(item.id)}
                                                    className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded-l-lg font-bold">+</button>
                                            </div>
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="text-red-500 hover:text-red-700 font-bold px-2 py-1">X</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t pt-4 mt-4 flex justify-between text-lg font-bold text-gray-900">
                                <div className="flex justify-between text-base text-gray-600">
                                    <span>Total Items:</span>
                                    <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                                </div>
                                <div className="flex justify-between text-lg text-gray-600 border-t pt-2">
                                    <span>Total Price:</span>
                                    <span className="text-amber-500">${totalPrice}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default Shop;