import { createContext, useState } from 'react'

export const cartContext = createContext({ cartTotal: 0, addToCart: () => {} })

export const CartContextProvider = (props) => {
	const [cartTotal, setCartTotal] = useState(0)

	const addToCartHandler = (val) => {
		setCartTotal((prevState) => prevState + val)
	}
	return (
		<cartContext.Provider value={{ cartTotal, addToCart: addToCartHandler }}>{props.children}</cartContext.Provider>
	)
}

