import React from 'react'
import Cart from '../cart'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to={'/home'}>Home</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/milk-teas'}>MilkTeas</Link>
					</li>
				</ul>
				<Cart />
			</nav>
		</header>
	)
}

export default Header

