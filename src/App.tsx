import React, { useState } from 'react'
import NavBar from './components/NavBar'
import PRODUCTS from './data/products'

import './App.css'
import ProductCard from './components/ProductCard'

function App() {

	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className="App">
			<NavBar />
			<main>
				<input 
					id=""
					type="text" 
					placeholder="Buscar Produto" 
					onChange={(event) => { 
						setSearchTerm(event.target.value.toString().toLocaleLowerCase())
					}}
				/>
				<div className="principais-destaques">
					{
						// wtfffffffffffffffffffffff
						PRODUCTS.filter((item) => {
							if (searchTerm === '') return item
							else if (item.searchTerms.find((i) => {
								if (i.includes(searchTerm)) {
									return true
								} else return false
							})) return item
							
						}).map((p, index) => (
							<ProductCard product={p} key={index} />
						))
					}
				</div>
			</main>
		</div>
	)
}

export default App
