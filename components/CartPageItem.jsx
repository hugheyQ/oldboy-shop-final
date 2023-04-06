import styles from '@/styles/components/CartPageItem.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import InputField from './InputField'
import { MdClose } from 'react-icons/md'
import { Button, Col, Row } from 'react-bootstrap'
import DeleteButton from './DeleteButton'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const CartPageItem = ({ product }) => {
	return (
		<div className={`${styles.mainWrapper} ${arimo.className}`}>
			<div className={styles.imageWrapper}>
				<Image src={product.image} alt={product.title} fill />
			</div>
			<div className={styles.productDetails}>
				<span className={styles.brand}>{product.brand}</span>
				<span className={styles.title}>{product.title}</span>

				<Row className={styles.bottom}>
					<Col xs={12} md={4} className={styles.priceBlock}>
						<span className={styles.label}>Price</span>
						<span className={styles.price}>GH₵{product.price}</span>
					</Col>
					<Col xs={12} md={4} className={styles.quantityBlock}>
						<span className={styles.label}>Quantity</span>
						<div>
							<InputField variant='number' />
						</div>
					</Col>
					<Col xs={12} md={3} className={styles.totalBlock}>
						<span className={styles.label}>Total</span>
						<span className={styles.price}>GH₵{product.price}</span>
					</Col>
				</Row>
			</div>
			<DeleteButton />
		</div>
	)
}
export default CartPageItem
