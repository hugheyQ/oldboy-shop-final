import { Accordion, Button, Nav, Offcanvas } from 'react-bootstrap'
import {
	AiOutlineArrowLeft,
	AiOutlineHome,
	AiOutlineMessage,
} from 'react-icons/ai'
import { BsPen, BsShopWindow } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { GrInfo } from 'react-icons/gr'
import { BiCategoryAlt } from 'react-icons/bi'
import styles from '@/styles/components/Categories.module.scss'
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

const Categories = ({ show, handleClose }) => {
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
				<Offcanvas.Title className={styles.title}>
					Categories
				</Offcanvas.Title>
				<Button className={styles.closeButton} onClick={handleClose}>
					<AiOutlineArrowLeft />
				</Button>
			</Offcanvas.Header>
			<Offcanvas.Body className={`${styles.body} ${rajdhani.className}`}>
				<Accordion flush className={styles.categories}>
					<Accordion.Item eventKey='0' className={styles.category}>
						<Accordion.Header className={styles.categoryTitle}>
							Security
						</Accordion.Header>
						<Accordion.Body className={styles.subCategories}>
							<div className={styles.subCategory}>
								<h2>Access Control</h2>
								<Nav className={styles.navigation}>
									<Nav.Link href='#' className={styles.link}>
										Access Control Cable
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Access Control Power Supplies
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Assistance Alarms
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Alectronic Locks
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Exit Buttons and Call Points
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Intercoms
									</Nav.Link>
								</Nav>
							</div>

							<div className={styles.subCategory}>
								<h2>CCTV</h2>
								<Nav className={styles.navigation}>
									<Nav.Link href='#' className={styles.link}>
										CCTV Accessories
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										CCTV Cameras
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										CCTV Monitors
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										CCTV Recorders
									</Nav.Link>
								</Nav>
							</div>

							<div className={styles.subCategory}>
								<h2>Intruder Alarms</h2>
								<Nav className={styles.navigation}>
									<Nav.Link href='#' className={styles.link}>
										Perimeter Detection
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Wired Alarm Systems
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Wireless Alarm Systems
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										CCTV Recorders
									</Nav.Link>
								</Nav>
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1' className={styles.category}>
						<Accordion.Header className={styles.categoryTitle}>
							Networking
						</Accordion.Header>
						<Accordion.Body className={styles.subCategories}>
							<div className={styles.subCategory}>
								<h2>Network Infrastructure</h2>
								<Nav className={styles.navigation}>
									<Nav.Link href='#' className={styles.link}>
										Data Cable
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Modules and Faceplates
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Network Plugs and Connectors
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Patch Cables
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Patch Panels & Cable Management
									</Nav.Link>
								</Nav>
							</div>

							<div className={styles.subCategory}>
								<h2>Network Cabinets</h2>
								<Nav className={styles.navigation}>
									<Nav.Link href='#' className={styles.link}>
										Cabinet Accessories
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Server and Data Cabinets
									</Nav.Link>
								</Nav>
							</div>

							<div className={styles.subCategory}>
								<h2>Network Devices</h2>
								<Nav className={styles.navigation}>
									<Nav.Link href='#' className={styles.link}>
										Media Converters
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Network Switches
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Powerline
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Routers and Gateways
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Wireless Aerials and Accessories
									</Nav.Link>
									<Nav.Link href='#' className={styles.link}>
										Wireless Bridges
									</Nav.Link>
								</Nav>
							</div>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Offcanvas.Body>
		</Offcanvas>
	)
}
export default Categories
