import { createContext, useState } from "react";
import PropTypes from "prop-types"
const CartContext = createContext()

const initialState = {
    cart: [],
    total_amount: 0,
}

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initialState)

    return (<CartContext.Provider value={{ cart, setCart }}>
        {children}
    </CartContext.Provider>);
}

export { CartProvider }

CartProvider.propTypes = {
    children: PropTypes.element.isRequired
}