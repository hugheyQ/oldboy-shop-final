import AdditionalInfoSectionDesktop from '@/components/AdditionalInfoSectionDesktop'
import AdditionalInfoSectionMobile from '@/components/AdditionalInfoSectionMobile'
import Badge from '@/components/Badge'
import BottomAddToCart from '@/components/BottomAddToCart'
import ComplementaryProduct from '@/components/ComplementaryProduct'
import InputField from '@/components/InputField'
import Layout from '@/components/Layout'
import Product from '@/components/Product'
import ProductImagesModal from '@/components/ProductImagesModal'
import Rating from '@/components/Rating'
import styles from '@/styles/pages/ProductDetails.module.scss'
import data from '@/utils/data'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsFire } from 'react-icons/bs'
import { ImPlay3 } from 'react-icons/im'
import Slider from 'react-slick'
import Lightbox from 'yet-another-react-lightbox'
import Video from 'yet-another-react-lightbox/plugins/video'
import 'yet-another-react-lightbox/styles.css'

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
		{ id: 1, url: '/images/1.jpg', type: 'image' },
		{ id: 2, url: '/images/2.jpg', type: 'image' },
		{ id: 3, url: '/images/3.jpg', type: 'image' },
		{ id: 4, url: '/images/4.jpg', type: 'image' },
		{ id: 5, url: '/images/5.jpg', type: 'image' },
		{ id: 6, url: '/images/6.jpg', type: 'image' },
		{ id: 7, url: '/images/7.png', type: 'video' },
	]

	const [selectedImage, setSelectedImage] = useState(0)
	const [show, setShow] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [thumbnail, setThumbnail] = useState({})
	const [openLightbox, setOpenLightbox] = useState(false)
	const [thumbnailIndex, setThumbnailIndex] = useState(0)

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

	const settings3 = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		swipeToSlide: true,
		autoplay: false,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		arrows: false,
		slidesPerRow: 2,

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
					slidesToShow: 3,
					slidesToScroll: 3,
					slidesPerRow: 1,
				},
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					slidesPerRow: 1,
				},
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					slidesPerRow: 1,
				},
			},
		],
	}

	const handleCloseModal = () => setShowModal(false)

	const handleThumbnailClick = (thumbnail, index) => {
		setThumbnail(thumbnail)
		setShowModal(true)
		setThumbnailIndex(index)
	}

	const handleSelectImage = index => {
		setSelectedImage(index)
	}

	const handleScroll = () => {
		const scrollPosition = window.scrollY // => scroll position
		if (scrollPosition > 800) {
			setShow(true)
		} else {
			setShow(false)
		}
	}

	const handleLightboxOpen = index => {
		setOpenLightbox(true)
		setThumbnailIndex(index)
	}

	useEffect(() => {
		handleScroll()
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<Layout>
			<ProductImagesModal
				show={showModal}
				handleClose={handleCloseModal}
				thumbnail={thumbnail}
				thumbnailIndex={thumbnailIndex}
			/>
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
											onMouseOver={() => handleSelectImage(i)}
											onClick={() => handleThumbnailClick(thumbnail, i)}
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
													<ImPlay3 />
												</div>
											)}
										</div>
									))}
								</div>
								<div
									className={styles.productImageDisplay}
									onClick={() =>
										handleThumbnailClick(
											thumbnails[selectedImage],
											selectedImage
										)
									}
								>
									<Image src={thumbnails[selectedImage].url} alt='' fill />
									<div className={styles.statusWrapper}>
										{product.bestSeller && <Badge type='seller' />}
										{product.new && <Badge type='new' />}
										{product.discounted && <Badge type='sale' />}
										{product.stock === 0 && <Badge type='soldout' />}
									</div>
									{thumbnails[selectedImage].type === 'video' && (
										<div className={styles.playButton}>
											<ImPlay3 />
										</div>
									)}
								</div>

								<Slider {...settings1} className='product-thumbnails-slider'>
									{thumbnails.map((thumbnail, i) => (
										<div key={i} onClick={() => handleLightboxOpen(i)}>
											<Image src={thumbnail.url} alt='' fill />
											{thumbnail.type === 'video' && (
												<div className={styles.playButton}>
													<ImPlay3 />
												</div>
											)}
										</div>
									))}
								</Slider>

								<Lightbox
									plugins={[Video]}
									open={openLightbox}
									close={setOpenLightbox}
									index={thumbnailIndex}
									slides={[
										{ src: '/images/1.jpg' },
										{ src: '/images/2.jpg' },
										{ src: '/images/3.jpg' },
										{ src: '/images/4.jpg' },
										{ src: '/images/5.jpg' },
										{ src: '/images/6.jpg' },
										{
											type: 'video',
											width: 1280,
											height: 720,
											poster: '/images/7.png',
											sources: [{ src: '/images/video.mp4', type: 'video/mp4' }],
										},
									]}
								/>
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

								<Row>
									<Col xs={5} className='d-flex align-items-end'>
										<div className={styles.quantity}>
											<InputField
												variant='number'
												label='Quantity'
												controlId='quantity'
											/>
										</div>
									</Col>
									<Col xs={7} className='d-flex align-items-end'>
										<Button
											className={`${styles.addToCartButton} ${
												rajdhani.className
											} ${product?.stock === 0 && styles.outOfStock}`}
										>
											{product?.stock === 0 ? 'Out of stock' : 'Add to cart'}
										</Button>
									</Col>
								</Row>
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
						<Row>
							<Col xs={12} lg={7} className={styles.left}>
								<AdditionalInfoSectionDesktop />
								<AdditionalInfoSectionMobile />
							</Col>
							<Col xs={12} lg={5} className={styles.right}>
								<h3 className={rajdhani.className}>Related Products</h3>

								<Slider {...settings3}>
									{products.map(product => (
										<Product key={product.id} product={product} margin />
									))}
								</Slider>
							</Col>
						</Row>
					</Container>
				</section>

				<BottomAddToCart show={show} product={product} />
			</div>
		</Layout>
	)
}
export default ProductDetail
