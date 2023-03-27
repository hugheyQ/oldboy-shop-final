import styles from '@/styles/components/SpecificProductsShowcase.module.scss'
import data from '@/utils/data'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button, Form, Nav, Tab, Tabs } from 'react-bootstrap'
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

const SpecificProductsShowcase = ({
	title,
	subCategories,
	products,
}) => {
	const [key, setKey] = useState('new')

	const settings1 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,

		responsive: [
			{
				breakpoint: 1199.98,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
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
				},
			},
		],
	}

	const settings2 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 4500,
		pauseOnFocus: true,
		arrows: false,
	}

	return (
		<div className='position-relative'>
			<h2 className={`${styles.heading} ${rajdhani.className}`}>
				{title}
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

			<div className={styles.categoryCardSliderMenu}>
				<h4 className={rajdhani.className}>{title}</h4>
				<Nav className={`${styles.navigation} ${arimo.className}`}>
					{subCategories.map((subCategory, i) => (
						<Nav.Link key={i} href='#' className={styles.navigationLink}>
							{subCategory.title}
						</Nav.Link>
					))}
				</Nav>

				<Link
					href='#'
					className={`${styles.shopNowButton} ${rajdhani.className}`}
				>
					Shop Now
				</Link>
			</div>

			<Slider {...settings2} className='category-card-slider'>
				<div>
					<Image src='/images/networking1.jpg' fill alt='' />
				</div>
				<div>
					<Image src='/images/networking2.jpg' fill alt='' />
				</div>
				<div>
					<Image src='/images/networking3.jpg' fill alt='' />
				</div>
			</Slider>

			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={k => setKey(k)}
				className={`showcase-navigation specific ${rajdhani.className} d-none d-md-flex justify-content-end`}
			>
				{/* <Slider {...settings1}>
					{products.map((product, i) => (
						<Product key={i} product={product} />
					))}
				</Slider> */}
				<Tab
					eventKey='new'
					title='New products'
					className={styles.showcasePane}
				>
					<Slider {...settings1}>
						{products.map((product, i) => (
							<Product key={i} product={product} />
						))}
					</Slider>
				</Tab>
				<Tab
					eventKey='best'
					title='Best sellers'
					className={styles.showcasePane}
				>
					<Slider {...settings1}>
						{products.map((product, i) => (
							<Product key={i} product={product} />
						))}
					</Slider>
				</Tab>
				<Tab
					eventKey='featured'
					title='Featured products'
					className={styles.showcasePane}
				>
					<Slider {...settings1}>
						{products.map((product, i) => (
							<Product key={i} product={product} />
						))}
					</Slider>
				</Tab>
				<Tab
					eventKey='popular'
					title='Most popular'
					className={styles.showcasePane}
				>
					<Slider {...settings1}>
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
