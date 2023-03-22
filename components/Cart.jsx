import styles from '@/styles/components/Cart.module.scss'
import { Offcanvas } from 'react-bootstrap'
import { Rajdhani } from 'next/font/google'
import CartItem from './CartItem'
import Link from 'next/link'
import CloseButton from './CloseButton'
import data from '@/utils/data'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: [
		// '100',
		// '200',
		'300',
		'400',
		'500',
		'600',
		'700',
		// '800',
		// '900',
	],
})

const Cart = ({ handleClose, show }) => {
	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			placement='end'
			className={styles.mainWrapper}
		>
			<Offcanvas.Header className={styles.header}>
				<Offcanvas.Title
					className={`${styles.title} ${rajdhani.className}`}
				>
					Shopping cart
				</Offcanvas.Title>
				<CloseButton handleClose={handleClose} />
			</Offcanvas.Header>
			<Offcanvas.Body className={styles.body}>
				{data.products.map((product, i) => (
					<CartItem key={i} product={product} />
				))}
				<div className={`${styles.footer}  ${rajdhani.className}`}>
					<Link href='/checkout' className={styles.checkoutLink}>
						Check out now
					</Link>
					<Link href='/cart' className={styles.cartLink}>
						View Cart
					</Link>
				</div>
			</Offcanvas.Body>
		</Offcanvas>
	)
}
export default Cart
