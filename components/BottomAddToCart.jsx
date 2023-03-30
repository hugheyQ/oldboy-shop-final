import styles from '@/styles/components/BottomAddToCart.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import {
	Button,
	Col,
	Container,
	Offcanvas,
	Row,
} from 'react-bootstrap'
import InputField from './InputField'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const BottomAddToCart = ({ show, product }) => {
	const discountPrice =
		product.price - (product.price * product.discount) / 100

	return (
		<Offcanvas
			show={show}
			placement='bottom'
			scroll={true}
			backdrop={false}
			className={`${styles.mainWrapper} shadow`}
		>
			<Offcanvas.Body className={styles.body}>
				<Container>
					<Row>
						<Col xs={12} lg={6} className='d-none d-lg-block'>
							<div className={`${styles.product} ${arimo.className}`}>
								<div className={styles.imageWrapper}>
									<Image src={product.image} fill alt={product.title} />
								</div>

								<div className={styles.productDetails}>
									<h1 className={styles.title}>{product.title}</h1>

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
								</div>
							</div>
						</Col>
						<Col xs={12} lg={6} className={styles.right}>
							<InputField variant='number' />
							<Button
								className={`${styles.addToCartButton} ${rajdhani.className} ${
									product?.stock === 0 && styles.outOfStock
								}`}
							>
								{product?.stock === 0 ? 'Out of stock' : 'Add to cart'}
							</Button>
						</Col>
					</Row>
				</Container>
			</Offcanvas.Body>
		</Offcanvas>
	)
}
export default BottomAddToCart
