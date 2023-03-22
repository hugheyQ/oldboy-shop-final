import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { BsCart } from 'react-icons/bs'
import styles from '@/styles/components/CartPopover.module.scss'
import CartItem from './CartItem'
import CustomLink from './CustomLink'
import data from '@/utils/data'

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
			{data.products.map((product, i) => (
				<CartItem key={i} product={product} />
			))}
		</Popover.Body>
		<Popover.Header
			style={{
				borderRadius: 0,
				display: 'flex',
				flexDirection: 'column',
				rowGap: '.8em',
				padding: '1.5em 1.8em',
			}}
		>
			<CustomLink href='/checkout' variant='checkout'>
				Check out now
			</CustomLink>

			<CustomLink href='/cart' variant='cart'>
				View Cart
			</CustomLink>
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
