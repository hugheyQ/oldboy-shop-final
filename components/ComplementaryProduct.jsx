import styles from '@/styles/components/ComplementaryProduct.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Checkbox from './Checkbox'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const ComplementaryProduct = ({ product }) => {
	const discountPrice =
		product.price - (product.price * product.discount) / 100

	const [selected, setSelected] = useState(true)

	const handleSelect = () => {
		setSelected(!selected)
	}
	return (
		<div
			className={`${styles.mainWrapper} ${selected && styles.selected}`}
		>
			<div className={styles.productImage}>
				<Link href='/products/2323'>
					<Image src={product.image} alt={product.title} fill />
				</Link>
			</div>
			<div className={`${styles.productDetails} ${arimo.className}`}>
				<div className={styles.title}>
					<Checkbox
						label={product.title}
						id={product.id}
						name='fbt'
						handleSelect={handleSelect}
						selected={selected}
					/>
				</div>
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
			</div>
		</div>
	)
}
export default ComplementaryProduct
