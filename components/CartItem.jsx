import styles from '@/styles/components/CartItem.module.scss'
import Image from 'next/image'

import { Arimo } from 'next/font/google'

const arimo = Arimo({
	subsets: ['latin'],
	weight: [
		// '100',
		// '200',
		// '300',
		'400',
		'500',
		'600',
		'700',
		// '800',
		// '900',
	],
})

const CartItem = () => {
	return (
		<div className={`${styles.mainWrapper} ${arimo.className}`}>
			<div className={styles.productImage}>
				<Image src='/images/1.jpg' alt='' fill />
			</div>
			<div className={styles.productDetails}>
				<span className={styles.productBrand}>Samsung</span>
				<span className={styles.productTitle}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				</span>
				<div className={styles.productSubtotal}>
					<span className={styles.productQuantity}>2</span> X{' '}
					<span className={styles.productPrice}>GHC 200.00</span>
				</div>
			</div>
		</div>
	)
}
export default CartItem
