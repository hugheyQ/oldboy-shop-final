import styles from '@/styles/components/CartItem.module.scss'
import Image from 'next/image'

import { Arimo } from 'next/font/google'
import Link from 'next/link'

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const CartItem = ({ product }) => {
	return (
		<div className={`${styles.mainWrapper} ${arimo.className}`}>
			<div className={styles.productImage}>
				<Image src={product.image} alt={product.title} fill />
			</div>
			<div className={styles.productDetails}>
				<span className={styles.productBrand}>{product.brand}</span>
				<span className={styles.productTitle}>
					<Link href='/products/232'>{product.title}</Link>
				</span>
				<div className={styles.productSubtotal}>
					<span className={styles.productQuantity}>2</span> X{' '}
					<span className={styles.productPrice}>GHC {product.price}</span>
				</div>
			</div>
		</div>
	)
}
export default CartItem
