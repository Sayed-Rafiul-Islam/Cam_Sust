"use client"


export default function cartData(item) {
    
    if (typeof window !== 'undefined') {
        const test = localStorage.getItem('cartItems') ? true : false
      
        
        if (test) {
            
            const cartItems = JSON.parse(localStorage.cartItems)
            const existingItem = cartItems.filter(cartItem => cartItem._id === item._id && cartItem.size === item.size )
            const updateRequired = existingItem.length ? true : false            
            if(updateRequired) {
                
            const exist = existingItem[0]
            const temp = cartItems.filter(cartItem => cartItem.size !== item.size )
            exist.quantity = exist.quantity + 1;
            temp.push(exist)
            localStorage.setItem("cartItems", JSON.stringify(temp))
            }
            else  {
                cartItems.push(item)
                localStorage.setItem("cartItems", JSON.stringify(cartItems))
            }
        }
        else {
            const cartItems = []
            cartItems.push(item)
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
        }

        const test1 = localStorage.getItem('costs') ? true : false
        if (test1){
            const costs = JSON.parse(localStorage.costs)
            const newCosts = costs + item.price
            localStorage.setItem("costs", JSON.stringify(newCosts))
        }
        else {
            localStorage.setItem("costs", JSON.stringify(item.price))
        }
      }  
}
