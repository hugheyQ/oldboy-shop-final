import styles from '@/styles/components/ItemAddedModal.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import CloseButton from './CloseButton'

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const ItemAddedModal = ({ show, handleClose, product }) => {
	const discountPrice =
		product.price - (product.price * product.discount) / 100

	return (
		<Modal
			className={styles.mainWrapper}
			show={show}
			onHide={handleClose}
			size='lg'
			centered
		>
			<Modal.Header className={styles.header}>
				<Modal.Title className={`${styles.title} ${rajdhani.className}`}>
					Ok, 1 item was added to your cart. What&apos;s next?
				</Modal.Title>
				<CloseButton handleClose={handleClose} variant='dark' />
			</Modal.Header>
			<Modal.Body className={styles.body}>
				<Row>
					<Col
						xs={12}
						lg={8}
						className={`${styles.right} ${arimo.className}`}
					>
						<div className={styles.imageWrapper}>
							<Image src={product.image} alt={product.title} fill />
						</div>

						<div className={styles.productDetails}>
							<span className={styles.brand}>{product.brand}</span>
							<span className={styles.title}>{product.title}</span>
							<div className={styles.pricesBlock}>
								1 X
								{product?.discounted ? (
									<>
										<span className={styles.oldPrice}>GH₵{product.price}</span>
										<span className={`${styles.price} ${styles.discounted}`}>
											GH₵{discountPrice}
										</span>
									</>
								) : (
									<span className={styles.price}>GH₵{product.price}</span>
								)}
							</div>
						</div>
					</Col>
					<Col
						xs={12}
						lg={4}
						className={`${styles.left} ${arimo.className}`}
					>
						<Link
							href='/checkout'
							className={`${styles.checkoutLink} ${rajdhani.className}`}
						>
							Proceed to checkout
						</Link>

						<div className={styles.subTotalWrapper}>
							<span className={styles.label}>Order Subtotal</span>
							<span className={styles.price}>GH₵{product.price}</span>
						</div>

						<span className={styles.cartSummary}>
							Your cart contains 1 item
						</span>

						<Button
							onClick={handleClose}
							className={`${styles.cartLink} ${rajdhani.className}`}
						>
							Continue Shopping
						</Button>
						<Link
							href='/cart'
							className={`${styles.cartLink} ${rajdhani.className}`}
						>
							View or edit your cart
						</Link>
					</Col>
				</Row>
			</Modal.Body>
		</Modal>
	)
}
export default ItemAddedModal
