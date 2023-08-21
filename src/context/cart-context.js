import { createContext, useState } from 'react'

export const cartContext = createContext({ cart: null, updateCart: () => {} })

// HOC

export const CartContextProvider = (props) => {
	const [cart, setCart] = useState({})

	const updateCart = (newCartInfo) => {
		setCart(newCartInfo)
	}

	return <cartContext.Provider value={{ cart, updateCart }}>{props.children}</cartContext.Provider>
}

