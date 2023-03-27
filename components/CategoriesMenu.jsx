import { Accordion, Button, Nav, Offcanvas } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import styles from '@/styles/components/CategoriesMenu.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'
import data from '@/utils/data'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})
const { categories } = data

const CategoriesMenu = ({ show, handleClose }) => {
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
			<Offcanvas.Body className={styles.body}>
				<Accordion
					flush
					className={`${styles.categories} ${arimo.className}`}
				>
					{categories.map((category, catIndex) => (
						<Accordion.Item
							eventKey={catIndex}
							className={styles.category}
							key={catIndex}
						>
							<Accordion.Header
								className={`${styles.categoryTitle} ${rajdhani.className}`}
							>
								{category.title}
							</Accordion.Header>
							<Accordion.Body className={styles.subCategories}>
								{category.subCategories.map((subCategory, subCatIndex) => (
									<div className={styles.subCategory} key={subCatIndex}>
										<h2 className={rajdhani.className}>{subCategory.title}</h2>
										<Nav className={styles.navigation}>
											{subCategory.links.map((link, linkIndex) => (
												<Nav.Link
													href={link.slug}
													className={styles.link}
													key={linkIndex}
												>
													{link.title}
												</Nav.Link>
											))}
										</Nav>
									</div>
								))}
							</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>
			</Offcanvas.Body>
		</Offcanvas>
	)
}
export default CategoriesMenu
