import styles from '@/styles/components/Product.module.scss'
import data from '@/utils/data'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { MdStarRate } from 'react-icons/md'
import Badge from './Badge'
import Rating from './Rating'

const { products } = data

// const product = products[0]

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const Product = ({ product, variant }) => {
	const discountPrice =
		product.price - (product.price * product.discount) / 100
	return (
		<div
			className={`${styles.mainWrapper} ${
				variant === 'bordered' && 'border shadow'
			}`}
		>
			<div className={styles.productImage}>
				<div
					className={`${styles.statusWrapper} ${arimo.className} ${
						variant === 'bordered' && 'me-3 mt-3'
					}`}
				>
					{product.bestSeller && <Badge type='seller' />}
					{product.new && <Badge type='new' />}
					{product.discounted && <Badge type='sale' />}
					{product.stock === 0 && <Badge type='soldout' />}
				</div>
				<Link href='/products/2323'>
					<Image src={product.image} alt={product.title} fill />
				</Link>
			</div>
			<div
				className={`${styles.productDetails} ${arimo.className} ${
					variant === 'bordered' && 'p-3'
				}`}
			>
				<span className={styles.productBrand}>{product.brand}</span>
				<span className={styles.productTitle}>
					<Link href='/products/3232'>{product.title}</Link>
				</span>
				<Rating />
				<div className={styles.pricesBlock}>
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
				<Button
					className={`${styles.addToCartButton} ${rajdhani.className} ${
						product?.stock === 0 && styles.outOfStock
					}`}
				>
					{product?.stock === 0 ? 'Out of stock' : 'Add to cart'}
				</Button>
			</div>
		</div>
	)
}
export default Product
