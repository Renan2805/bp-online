import React from 'react'
import ITEMS from './menuItems'

import './index.css'

const NavBar = () => {

	return (
		<nav>
			<h1 className="title">Bom Preço</h1>
			<ul className="items">
				{
					ITEMS.map((item, index) => (
						<li key={index}>
							<p>{item.icon}</p>
							<p>{item.title}</p>
						</li>
					))
				}
			</ul>
		</nav>
	)
}

export default NavBar