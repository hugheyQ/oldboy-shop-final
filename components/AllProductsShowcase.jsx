import styles from '@/styles/components/AllProductsShowcase.module.scss'
import data from '@/utils/data'
import { Arimo, Rajdhani } from 'next/font/google'
import { useState } from 'react'
import { Form, Tab, Tabs } from 'react-bootstrap'
import Slider from 'react-slick'
import Product from './Product'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const { products } = data

const AllProductsShowcase = () => {
	const [key, setKey] = useState('new')

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		arrows: true,

		responsive: [
			{
				breakpoint: 1199.98,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	}

	return (
		<>
			<Form.Select
				onChange={e => setKey(e.target.value)}
				defaultValue={key}
				className={`${styles.selectField} ${rajdhani.className}`}
			>
				<option value='new'>New Products</option>
				<option value='best'>Best Sellers</option>
				<option value='featured'>Featured Products</option>
			</Form.Select>
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={k => setKey(k)}
				className={`showcase-navigation ${rajdhani.className} d-none d-sm-flex`}
			>
				<Tab eventKey='new' title='New products'>
					<Slider {...settings}>
						{products.map((product, i) => (
							<Product key={i} product={product} />
						))}
					</Slider>
				</Tab>
				<Tab eventKey='best' title='Best sellers'>
					<Slider {...settings}>
						{products.map((product, i) => (
							<Product key={i} product={product} />
						))}
					</Slider>
				</Tab>
				<Tab eventKey='featured' title='Featured products'>
					<Slider {...settings}>
						{products.map((product, i) => (
							<Product key={i} product={product} />
						))}
					</Slider>
				</Tab>
			</Tabs>
		</>
	)
}
export default AllProductsShowcase
