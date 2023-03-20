import styles from '@/styles/components/AllCategories.module.scss'
import { Col, ListGroup, Nav, Row, Tab } from 'react-bootstrap'

import { AiOutlineRight } from 'react-icons/ai'

const AllCategories = () => {
	return (
		<>
			<div className={styles.categoriesPane}>
				<ListGroup variant='flush' className={styles.categories}>
					<ListGroup.Item className={styles.category}>
						Networking <AiOutlineRight />
					</ListGroup.Item>
					<ListGroup.Item className={styles.category}>
						Security <AiOutlineRight />
					</ListGroup.Item>
				</ListGroup>
			</div>

			<div className={styles.subCategoriesPane}>
				<div className={styles.subCategory}>
					<h2>Network Infrastructure</h2>
					<Nav className={styles.subCategoryLinks}>
						<Nav.Link href='#'>Data cable</Nav.Link>
						<Nav.Link href='#'>Modules and Faceplates</Nav.Link>
						<Nav.Link href='#'>Network Plugs and Connectors</Nav.Link>
						<Nav.Link href='#'>Patch Cables</Nav.Link>
						<Nav.Link href='#'>Patch Panels & Cable Management</Nav.Link>
					</Nav>
				</div>

				<div className={styles.subCategory}>
					<h2>Network cabinets</h2>

					<Nav className={styles.subCategoryLinks}>
						<Nav.Link href='#'>Cabinet Accessories</Nav.Link>
						<Nav.Link href='#'>Server and Data Cabinets</Nav.Link>
					</Nav>
				</div>

				<div className={styles.subCategory}>
					<h2>Network devices</h2>

					<Nav className={styles.subCategoryLinks}>
						<Nav.Link href='#'>Media Converters</Nav.Link>
						<Nav.Link href='#'>Network Switches</Nav.Link>
						<Nav.Link href='#'>Powerline</Nav.Link>
						<Nav.Link href='#'>Routers and Gateways</Nav.Link>
						<Nav.Link href='#'>Wireless Aerials and Accessories</Nav.Link>
						<Nav.Link href='#'>Wireless bridges</Nav.Link>
					</Nav>
				</div>
			</div>
		</>
	)
}
export default AllCategories
