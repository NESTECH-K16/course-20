import Footer from './component/footer'
import Header from './component/header'
import { CartContextProvider } from './context/cart-context'
import About from './pages/About'
import Home from './pages/Home'
import MilkTeas from './pages/MilkTeas'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
				<CartContextProvider>
					<div className='content'>
						<Routes>
							<Route path='/milk-teas' element={<MilkTeas />} />
							<Route path='/home' element={<Home />} />
							<Route path='/about' element={<About />} />
						</Routes>
					</div>
				</CartContextProvider>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App

