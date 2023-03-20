import { Button, Nav, Offcanvas } from 'react-bootstrap'
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai'
import { BsPen, BsShopWindow } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { GrInfo } from 'react-icons/gr'
import { BiCategoryAlt } from 'react-icons/bi'
import styles from '@/styles/components/Menu.module.scss'
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

const Menu = ({ show, handleClose, handleCategoryOpen }) => {
	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			placement='start'
			className={styles.mainWrapper}
		>
			<Offcanvas.Header
				className={`${styles.header} ${rajdhani.className}`}
			>
				<Offcanvas.Title className={styles.title}>Menu</Offcanvas.Title>
				<Button className={styles.closeButton} onClick={handleClose}>
					<MdClose />
				</Button>
			</Offcanvas.Header>
			<Offcanvas.Body className={`${styles.body} ${rajdhani.className}`}>
				<Nav className={styles.navigation}>
					<Nav.Link href='/' className={styles.link}>
						Home
					</Nav.Link>
					<Nav.Link
						href='#'
						onClick={handleCategoryOpen}
						className={styles.link}
					>
						Categories
					</Nav.Link>
					<Nav.Link href='#' className={styles.link}>
						Flash deal
					</Nav.Link>
					<Nav.Link href='#' className={styles.link}>
						Contact Us
					</Nav.Link>
					<Nav.Link href='#' className={styles.link}>
						Blog
					</Nav.Link>
				</Nav>
			</Offcanvas.Body>
		</Offcanvas>
	)
}
export default Menu
