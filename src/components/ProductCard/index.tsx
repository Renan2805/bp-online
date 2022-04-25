import React from 'react'

import './index.css'

interface Product {
	id: number,
	name: string,
	price:  number,
	qtd: string,
	image: string
}

interface Props {
	product: Product
}

const ProductCard = ({ product }:Props) => {


	return (
		<div id={'product'}>
			<img 
				src={ product.image } 
				alt={`${product.name} Image`} 
			/>
			<h2 className={'product-name'}>
				{ product.name }
			</h2>
			<h3>
				{ `R$${product.price.toFixed(2)} ${product.qtd}`}
				{product.qtd === 'kg' ? ` | R$${(product.price / 10).toFixed(2)} 100g` : ''}
			</h3>
		</div>
	)
}

export default ProductCard