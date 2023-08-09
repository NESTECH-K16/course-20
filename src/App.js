import { useState } from 'react'
import Counter from './Counter'
import Films from './Films'
import Modal from './components/Modal'
import './index.scss'
import Overlay from './components/Overlay'
import { createPortal } from 'react-dom'
import Cart from './components/Cart'
import Product from './components/Product'
import { CartContextProvider } from './contexts/cart-context'

function App() {
	const [open, setOpen] = useState(false)

	const changeOpenModalHandler = (val) => {
		setOpen(val)
	}

	return (
		<div className='container'>
			<CartContextProvider>
				<header>
					<span>K16 Shop</span>
					<Cart count={3} />
				</header>
				<div>
					<Product name='T Shirt' price={500} />
				</div>
			</CartContextProvider>
			<Counter />
			{/* <button onClick={() => setOpen(true)}>Show Modal</button>
			{console.log(open)}
			{open && createPortal(<Modal handleOpen={changeOpenModalHandler} />, document.getElementById('modal'))}
			{open && createPortal(<Overlay />, document.getElementById('overlay'))} */}
		</div>
	)
}

export default App

