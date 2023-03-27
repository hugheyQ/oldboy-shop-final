import styles from '@/styles/components/Product.module.scss'
import data from '@/utils/data'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { MdStarRate } from 'react-icons/md'

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
					{product.bestSeller && (
						<span className={styles.bestSeller}>Best Sellers</span>
					)}
					{product.new && <span className={styles.new}>New</span>}
					{product.discounted && <span className={styles.sale}>Sale</span>}
					{product.stock === 0 && (
						<span className={styles.soldOut}>Sold out</span>
					)}
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
				<div className={styles.ratingWrapper}>
					<MdStarRate />
					<MdStarRate />
					<MdStarRate />
					<MdStarRate />
					<MdStarRate />
				</div>
				<div className={styles.pricesBlock}>
					{product?.discounted ? (
						<>
							<span className={styles.oldPrice}>GHC {product.price}</span>
							<span className={`${styles.price} ${styles.discounted}`}>
								GHC {discountPrice}
							</span>
						</>
					) : (
						<span className={styles.price}>GHC {product.price}</span>
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
