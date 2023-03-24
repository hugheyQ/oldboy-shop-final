import styles from '@/styles/components/SpecificProductsShowcase.module.scss'
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

const SpecificProductsShowcase = () => {
	const [key, setKey] = useState('new')

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 4500,
		pauseOnFocus: true,

		responsive: [
			{
				breakpoint: 1199.98,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	}

	return (
		<div className='position-relative'>
			<h2 className={`${styles.heading} ${rajdhani.className}`}>
				Networking
			</h2>
			<Form.Select
				onChange={e => setKey(e.target.value)}
				defaultValue={key}
				className={`${styles.selectField} ${rajdhani.className}`}
			>
				<option value='new'>New Products</option>
				<option value='best'>Best Sellers</option>
				<option value='featured'>Featured Products</option>
				<option value='popular'>Most Popular</option>
			</Form.Select>
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={k => setKey(k)}
				className={`showcase-navigation specific ${rajdhani.className} d-none d-md-flex justify-content-end`}
			>
				<Slider {...settings}>
					{products.map((product, i) => (
						<Product key={i} product={product} />
					))}
				</Slider>
				<Tab
					eventKey='new'
					title='New products'
					style={{ maxWidth: '775px', marginLeft: 'auto' }}
				>
					<Slider {...settings}>
						{products.map((product, i) => (
							<Product key={i} product={product} />
						))}
					</Slider>
				</Tab>
				<Tab
					eventKey='best'
					title='Best sellers'
					style={{ maxWidth: '775px', marginLeft: 'auto' }}
				>
					<Slider {...settings}>
						{products.map((product, i) => (
							<Product key={i} product={product} />
						))}
					</Slider>
				</Tab>
				<Tab
					eventKey='featured'
					title='Featured products'
					style={{ maxWidth: '775px', marginLeft: 'auto' }}
				>
					<Slider {...settings}>
						{products.map((product, i) => (
							<Product key={i} product={product} />
						))}
					</Slider>
				</Tab>
				<Tab
					eventKey='popular'
					title='Most popular'
					style={{ maxWidth: '775px', marginLeft: 'auto' }}
				>
					<Slider {...settings}>
						{products.map((product, i) => (
							<Product key={i} product={product} />
						))}
					</Slider>
				</Tab>
			</Tabs>
		</div>
	)
}
export default SpecificProductsShowcase
