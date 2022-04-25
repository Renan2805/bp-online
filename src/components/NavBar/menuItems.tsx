import React, { ReactElement } from 'react'
import { FaStar,  FaStore, FaClock, FaShoppingCart } from 'react-icons/fa'

interface Item {
	title: string,
	icon: ReactElement,
}

const ITEMS: Array<Item> = [
	{
		title: 'Destaques',
		icon: <FaStar />
	},
	{
		title: 'Produtos',
		icon: <FaStore />
	},
	{
		title: 'Horários',
		icon: <FaClock />
	},
	{
		title: 'Carrinho',
		icon: <FaShoppingCart />
	}
]

export default ITEMS