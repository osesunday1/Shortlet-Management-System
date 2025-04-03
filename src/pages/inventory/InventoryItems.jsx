import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Footer from '../../components/admin/Footer';

const InventoryItems = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);
    const [checkoutForm, setCheckoutForm] = useState({
        name: '',
        apartment: ''
    });

    // Inventory items data
    const inventoryItems = [
        // Beverages
        {
            id: 1,
            name: "Bottled Water (Pack of 24)",
            category: "Beverages",
            price: "₦2,500",
            quantity: 50,
            image: "https://images.unsplash.com/photo-1560023907-5f339c7c8d45",
            description: "Pure mineral water in convenient bottles",
            status: "In Stock"
        },
        {
            id: 2,
            name: "Fresh Orange Juice (2L)",
            category: "Beverages",
            price: "₦1,800",
            quantity: 30,
            image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b",
            description: "100% pure squeezed orange juice",
            status: "In Stock"
        },
        {
            id: 3,
            name: "Premium Coffee Beans",
            category: "Beverages",
            price: "₦4,500",
            quantity: 25,
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
            description: "Freshly roasted Arabica coffee beans",
            status: "Limited Stock"
        },

        // Meat & Poultry
        {
            id: 4,
            name: "Premium Roast Beef",
            category: "Meat",
            price: "₦15,000",
            quantity: 15,
            image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976",
            description: "High-quality roasted beef, ready to serve",
            status: "Limited Stock"
        },
        {
            id: 5,
            name: "Chicken Breast (1kg)",
            category: "Meat",
            price: "₦4,000",
            quantity: 40,
            image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
            description: "Fresh, skinless chicken breast",
            status: "In Stock"
        },
        {
            id: 6,
            name: "Lamb Chops",
            category: "Meat",
            price: "₦12,000",
            quantity: 20,
            image: "https://images.unsplash.com/photo-1603048593460-f1063f4133e7",
            description: "Premium cut lamb chops",
            status: "In Stock"
        },

        // Vegetables & Produce
        {
            id: 7,
            name: "Fresh Potatoes (5kg)",
            category: "Vegetables",
            price: "₦3,000",
            quantity: 30,
            image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
            description: "Farm-fresh potatoes for various dishes",
            status: "In Stock"
        },
        {
            id: 8,
            name: "Mixed Vegetables Pack",
            category: "Vegetables",
            price: "₦2,800",
            quantity: 25,
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
            description: "Assorted fresh vegetables",
            status: "In Stock"
        },
        {
            id: 9,
            name: "Fresh Tomatoes (Crate)",
            category: "Vegetables",
            price: "₦4,500",
            quantity: 20,
            image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
            description: "Ripe and fresh tomatoes",
            status: "Limited Stock"
        },

        // Dairy & Eggs
        {
            id: 10,
            name: "Fresh Milk (1L)",
            category: "Dairy",
            price: "₦1,200",
            quantity: 45,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
            description: "Fresh pasteurized milk",
            status: "In Stock"
        },
        {
            id: 11,
            name: "Cheese Selection Pack",
            category: "Dairy",
            price: "₦6,500",
            quantity: 15,
            image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
            description: "Assorted premium cheeses",
            status: "Limited Stock"
        },
        {
            id: 12,
            name: "Farm Fresh Eggs (Tray)",
            category: "Dairy",
            price: "₦2,200",
            quantity: 50,
            image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
            description: "Fresh eggs from local farms",
            status: "In Stock"
        },

        // Pantry Items
        {
            id: 13,
            name: "Premium Rice (10kg)",
            category: "Pantry",
            price: "₦8,000",
            quantity: 35,
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
            description: "High-quality long-grain rice",
            status: "In Stock"
        },
        {
            id: 14,
            name: "Cooking Oil (5L)",
            category: "Pantry",
            price: "₦5,500",
            quantity: 40,
            image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
            description: "Pure vegetable cooking oil",
            status: "In Stock"
        },
        {
            id: 15,
            name: "Pasta Variety Pack",
            category: "Pantry",
            price: "₦3,200",
            quantity: 30,
            image: "https://images.unsplash.com/photo-1551462147-ff29ce9d4853",
            description: "Selection of premium pasta varieties",
            status: "In Stock"
        },

        // Snacks & Confectionery
        {
            id: 16,
            name: "Mixed Nuts (500g)",
            category: "Snacks",
            price: "₦4,800",
            quantity: 25,
            image: "https://images.unsplash.com/photo-1536591375624-f1b3c7f6d2b7",
            description: "Premium selection of mixed nuts",
            status: "In Stock"
        },
        {
            id: 17,
            name: "Chocolate Selection Box",
            category: "Snacks",
            price: "₦5,500",
            quantity: 20,
            image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9",
            description: "Assorted premium chocolates",
            status: "Limited Stock"
        },
        {
            id: 18,
            name: "Potato Chips Variety Pack",
            category: "Snacks",
            price: "₦2,800",
            quantity: 35,
            image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
            description: "Selection of different flavored chips",
            status: "In Stock"
        },

        // Fruits
        {
            id: 19,
            name: "Fresh Apple Pack (1kg)",
            category: "Fruits",
            price: "₦3,500",
            quantity: 40,
            image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
            description: "Sweet and fresh apples",
            status: "In Stock"
        },
        {
            id: 20,
            name: "Banana Bunch",
            category: "Fruits",
            price: "₦1,500",
            quantity: 50,
            image: "https://images.unsplash.com/photo-1543218024-57a70143c369",
            description: "Fresh, ripe bananas",
            status: "In Stock"
        },

        // Condiments
        {
            id: 21,
            name: "Premium Honey Jar",
            category: "Condiments",
            price: "₦4,000",
            quantity: 25,
            image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38",
            description: "Pure natural honey",
            status: "In Stock"
        },
        {
            id: 22,
            name: "Spice Collection Set",
            category: "Condiments",
            price: "₦6,500",
            quantity: 20,
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
            description: "Essential cooking spices set",
            status: "Limited Stock"
        },

        // Seafood
        {
            id: 23,
            name: "Fresh Salmon Fillet",
            category: "Seafood",
            price: "₦12,000",
            quantity: 15,
            image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369",
            description: "Premium fresh salmon fillet",
            status: "Limited Stock"
        },
        {
            id: 24,
            name: "Tiger Prawns (500g)",
            category: "Seafood",
            price: "₦8,500",
            quantity: 20,
            image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47",
            description: "Fresh tiger prawns",
            status: "In Stock"
        },

        // Bakery
        {
            id: 25,
            name: "Artisan Bread Selection",
            category: "Bakery",
            price: "₦3,500",
            quantity: 30,
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
            description: "Assorted freshly baked breads",
            status: "In Stock"
        }
    ];

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        toast.success(`Added ${item.name} to cart`);
    };

    const removeFromCart = (index) => {
        const newCart = cartItems.filter((_, i) => i !== index);
        setCartItems(newCart);
        toast.error('Item removed from cart');
    };

    // Calculate cart total
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('₦', '').replace(',', ''));
            return total + price;
        }, 0);
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        
        if (cartItems.length === 0) {
            toast.error('Your cart is empty!');
            return;
        }

        // Create order details
        const orderDetails = {
            items: cartItems,
            customerName: checkoutForm.name,
            apartment: checkoutForm.apartment,
            totalAmount: calculateTotal()
        };

        // Show success message
        toast.success('🎉 Order placed successfully! Your items will be delivered to your apartment.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        console.log('Order placed:', orderDetails);

        // Clear cart and form
        setCartItems([]);
        setCheckoutForm({ name: '', apartment: '' });
        setShowCheckout(false);
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'oklch(0.95 0.09 136.33)' }}>
            {/* Header */}
            <div className="bg-[#9747FF] shadow-lg">
                <div className="container mx-auto px-6 py-4">
                    <Link 
                        to="/" 
                        className="flex items-center gap-2 text-white hover:text-purple-200 transition-all duration-300 w-fit group font-medium"
                    >
                        <FiHome className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
                        Back to Homepage
                    </Link>
                </div>
            </div>

            <main className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Inventory Items */}
                    <div className="md:col-span-2">
                        <h1 className="text-3xl font-bold mb-8 text-center">
                            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                                Available Items
                            </span>
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {inventoryItems.map((item) => (
                                <div 
                                    key={item.id}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
                                >
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                                        <p className="text-gray-600 mb-2">{item.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-[#9747FF]">{item.price}</span>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="bg-[#9747FF] text-white px-4 py-2 rounded-lg hover:bg-[#8033FF] transition-all duration-300"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cart and Checkout */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 h-fit sticky top-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <FiShoppingBag className="text-2xl text-[#9747FF]" />
                                <h2 className="text-xl font-bold">Your Cart</h2>
                            </div>
                            {cartItems.length > 0 && (
                                <span className="bg-[#9747FF] text-white px-3 py-1 rounded-full text-sm">
                                    {cartItems.length} items
                                </span>
                            )}
                        </div>

                        {/* Cart Items */}
                        <div className="space-y-4 mb-6">
                            {cartItems.length === 0 ? (
                                <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                            ) : (
                                <>
                                    {cartItems.map((item, index) => (
                                        <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
                                            <div className="flex items-center gap-4">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    className="w-16 h-16 object-cover rounded-lg"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-800">{item.name}</p>
                                                    <p className="text-[#9747FF] font-semibold">{item.price}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(index)}
                                                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors duration-200"
                                            >
                                                <FiTrash2 size={20} />
                                            </button>
                                        </div>
                                    ))}

                                    {/* Cart Total */}
                                    <div className="border-t border-gray-200 pt-4 mt-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-gray-600">Total Amount:</span>
                                            <span className="text-xl font-bold text-[#9747FF]">
                                                ₦{calculateTotal().toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Checkout Section */}
                        {cartItems.length > 0 && !showCheckout && (
                            <button
                                onClick={() => setShowCheckout(true)}
                                className="w-full bg-[#9747FF] text-white py-3 rounded-xl hover:bg-[#8033FF] transition-all duration-300 font-semibold"
                            >
                                Proceed to Checkout
                            </button>
                        )}

                        {/* Checkout Form */}
                        {showCheckout && (
                            <form onSubmit={handleCheckout} className="space-y-4 border-t border-gray-200 pt-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={checkoutForm.name}
                                        onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] transition-all duration-300"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Apartment Number
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={checkoutForm.apartment}
                                        onChange={(e) => setCheckoutForm({...checkoutForm, apartment: e.target.value})}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] transition-all duration-300"
                                        placeholder="Enter your apartment number"
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowCheckout(false)}
                                        className="flex-1 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold"
                                    >
                                        Place Order
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default InventoryItems; 