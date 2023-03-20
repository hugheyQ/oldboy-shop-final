import styles from '@/styles/components/Cart.module.scss'
import { Button, Offcanvas } from 'react-bootstrap'
import { MdClose } from 'react-icons/md'
import { Rajdhani } from 'next/font/google'
import CartItem from './CartItem'
import Link from 'next/link'

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
				<Button className={styles.closeButton} onClick={handleClose}>
					<MdClose />
				</Button>
			</Offcanvas.Header>
			<Offcanvas.Body className={styles.body}>
				<CartItem />
				<CartItem />
				<CartItem />
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
