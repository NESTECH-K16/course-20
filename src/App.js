import { createStore } from '@reduxjs/toolkit'
import Footer from './component/footer'
import Header from './component/header'
import { CartContextProvider } from './context/cart-context'
import About from './pages/About'
import Home from './pages/Home'
import MilkTeas from './pages/MilkTeas'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<CartContextProvider>
					<Header />
					<ToastContainer />
					<div className='content'>
						<Routes>
							<Route path='/milk-teas' element={<MilkTeas />} />
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
						</Routes>
					</div>
					<Footer />
				</CartContextProvider>
			</div>
		</BrowserRouter>
	)
}

export default App

