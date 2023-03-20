import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { BsCart } from 'react-icons/bs'
import styles from '@/styles/components/CartPopover.module.scss'
import CartItem from './CartItem'
import Link from 'next/link'

import { Rajdhani } from 'next/font/google'

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

const popover = (
	<Popover
		id='popover-basic'
		style={{
			maxWidth: '350px',
			border: '1px solid rgb(230, 230, 230)',
		}}
	>
		{/* <Popover.Header as='h3'>Shopping Cart</Popover.Header> */}
		<Popover.Body style={{ padding: 0 }}>
			<CartItem />
			<CartItem />
		</Popover.Body>
		<Popover.Header
			style={{
				borderRadius: 0,
				display: 'flex',
				flexDirection: 'column',
				rowGap: '.8em',
				padding: '1.5em 1.8em',
			}}
			className={rajdhani.className}
		>
			<Link href='/checkout' className={styles.checkoutLink}>
				Check out now
			</Link>
			<Link href='/cart' className={styles.cartLink}>
				View Cart
			</Link>
		</Popover.Header>
	</Popover>
)

const CartPopover = () => {
	return (
		<OverlayTrigger
			trigger='click'
			placement='bottom'
			overlay={popover}
		>
			<Button className={styles.cartBtn}>
				<BsCart />
				<span>3</span>
			</Button>
		</OverlayTrigger>
	)
}
export default CartPopover
