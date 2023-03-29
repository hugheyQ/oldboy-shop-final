import AdditionalInfoSectionDesktop from '@/components/AdditionalInfoSectionDesktop'
import Badge from '@/components/Badge'
import ComplementaryProduct from '@/components/ComplementaryProduct'
import InputField from '@/components/InputField'
import Layout from '@/components/Layout'
import Rating from '@/components/Rating'
import styles from '@/styles/pages/ProductDetails.module.scss'
import data from '@/utils/data'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { BsFire } from 'react-icons/bs'
import Slider from 'react-slick'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const { products } = data

const product = products[1]

const discountPrice =
	product.price - (product.price * product.discount) / 100

const ProductDetail = () => {
	const thumbnails = [
		{ url: '/images/1.jpg', type: 'image' },
		{ url: '/images/2.jpg', type: 'image' },
		{ url: '/images/3.jpg', type: 'image' },
		{ url: '/images/4.jpg', type: 'image' },
		{ url: '/images/5.jpg', type: 'image' },
		{ url: '/images/6.jpg', type: 'image' },
		{ url: '/images/7.png', type: 'video' },
	]

	const [selectedImage, setSelectedImage] = useState(0)

	const selectImage = index => {
		setSelectedImage(index)
	}

	const settings1 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		arrows: false,
	}

	const settings2 = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		swipeToSlide: true,
		autoplay: false,
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
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	}

	return (
		<Layout>
			<div className={styles.mainWrapper}>
				<section
					className={`${styles.productDetailsWrapper} ${arimo.className}`}
				>
					<Container>
						<Row>
							<Col xs={12} md={6} className={styles.left}>
								<div className={styles.mobileStatusWrapper}>
									{product.bestSeller && <Badge type='seller' />}
									{product.new && <Badge type='new' />}
									{product.discounted && <Badge type='sale' />}
									{product.stock === 0 && <Badge type='soldout' />}
								</div>
								<div className={styles.productThumbnails}>
									{thumbnails.map((thumbnail, i) => (
										<div
											className={`${styles.thumbnailWrapper} ${
												selectedImage === i ? styles.active : ''
											}`}
											key={i}
											onMouseOver={() => selectImage(i)}
										>
											<Image
												src={thumbnail.url}
												alt=''
												height={50}
												width={50}
												className={styles.thumbnail}
											/>

											{thumbnail.type === 'video' && (
												<div
													className={`${styles.playButton} ${styles.thumbnail}`}
												>
													<AiOutlinePlayCircle />
												</div>
											)}
										</div>
									))}
								</div>
								<div className={styles.productImageDisplay}>
									<Image src={thumbnails[selectedImage].url} alt='' fill />
									<div className={styles.statusWrapper}>
										{product.bestSeller && <Badge type='seller' />}
										{product.new && <Badge type='new' />}
										{product.discounted && <Badge type='sale' />}
										{product.stock === 0 && <Badge type='soldout' />}
									</div>
									{thumbnails[selectedImage].type === 'video' && (
										<div className={styles.playButton}>
											<AiOutlinePlayCircle />
										</div>
									)}
								</div>

								<Slider {...settings1} className='product-thumbnails-slider'>
									{thumbnails.map((thumbnail, i) => (
										<div key={i}>
											<Image src={thumbnail.url} alt='' fill />
										</div>
									))}
								</Slider>
							</Col>

							<Col xs={12} md={6} className={styles.right}>
								<span className={styles.productBrand}>{product.brand}</span>
								<span className={styles.productTitle}>
									<Link href='/products/3232'>{product.title}</Link>
								</span>
								<div className={styles.reviewsBlock}>
									<Rating />
									<span>No reviews yets</span>
									<Link href='#'>Write a review</Link>
								</div>
								<div className={styles.productInfo}>
									<div className={styles.pricesBlock}>
										{product?.discounted ? (
											<>
												<span className={styles.oldPrice}>
													GH₵{product.price}
												</span>
												<span className={`${styles.price} ${styles.discounted}`}>
													GH₵{discountPrice}
												</span>
											</>
										) : (
											<span className={styles.price}>GH₵{product.price}</span>
										)}
									</div>

									<div className={styles.purchaseHistory}>
										<BsFire />
										<span>5 sold in the last 24 hours</span>
									</div>
								</div>
								<div className={styles.productInfo2}>
									<div className={styles.info}>
										<span>SKU:</span>
										<span>3k456</span>
									</div>
									<div className={styles.info}>
										<span>Availability:</span>
										<span>Usually ships within 3 days</span>
									</div>
									<div className={styles.info}>
										<span>Shipping:</span>
										<span>Calculated at checkout</span>
									</div>
								</div>

								<div className={styles.stockInfo}>
									<span>Current Stock:</span>
									<span>{product.stock}</span>
								</div>

								<div className={styles.quantity}>
									<InputField
										variant='number'
										label='Quantity'
										controlId='quantity'
									/>
								</div>

								<Button
									className={`${styles.addToCartButton} ${
										rajdhani.className
									} ${product?.stock === 0 && styles.outOfStock}`}
								>
									{product?.stock === 0 ? 'Out of stock' : 'Add to cart'}
								</Button>
							</Col>
						</Row>
					</Container>
				</section>

				<section className={styles.frequentlyBoughtTogetherWrapper}>
					<Container>
						<h2 className={`${styles.fbtTitle} ${rajdhani.className}`}>
							Frequently bought together
						</h2>
						<Row>
							<Col xs={12} xl={9}>
								<Slider {...settings2} className='fbt-slider'>
									{products.map((product, i) => (
										<ComplementaryProduct key={i} product={product} />
									))}
								</Slider>
							</Col>
							<Col
								xs={12}
								xl={3}
								className={`${styles.addAllToCartColumn} ${arimo.className}`}
							>
								<div className={styles.total}>
									<span>Total:</span>
									<span>GH₵2000.00</span>
								</div>
								<Button
									className={`${styles.addToCartButton} ${rajdhani.className}`}
								>
									Add all to cart
								</Button>
							</Col>
						</Row>
					</Container>
				</section>

				<section className={styles.additionalInfoWrapper}>
					<Container>
						<AdditionalInfoSectionDesktop />
					</Container>
				</section>
			</div>
		</Layout>
	)
}
export default ProductDetail
