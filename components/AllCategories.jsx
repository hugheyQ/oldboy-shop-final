import styles from '@/styles/components/AllCategories.module.scss'
import data from '@/utils/data'
import { Col, ListGroup, Nav, Row, Tab } from 'react-bootstrap'

import { AiOutlineRight } from 'react-icons/ai'

const { categories } = data

const AllCategories = () => {
	return (
		<Tab.Container
			defaultActiveKey={categories[0].title}
			className={styles.mainWrapper}
		>
			<Row>
				<Col sm={3}>
					<Nav variant='pills' className='custom-navigation'>
						{categories.map((category, i) => (
							<Nav.Item key={i}>
								<Nav.Link eventKey={category.title}>
									<span>{category.title}</span> <AiOutlineRight />
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
				</Col>
				<Col sm={9}>
					<Tab.Content className={styles.subCategoriesContainer}>
						{categories.map(category =>
							category.subCategories.map((subCategory, subCatIndex) => (
								<Tab.Pane eventKey={category.title} key={subCatIndex}>
									<div className={styles.subCategory}>
										<h2>{subCategory.title}</h2>
										{subCategory.links.map((link, linkIndex) => (
											<Nav className={styles.subCategoryLinks} key={linkIndex}>
												<Nav.Link href={`/${link.slug}`}>{link.title}</Nav.Link>
											</Nav>
										))}
									</div>
								</Tab.Pane>
							))
						)}
						{/* <Tab.Pane eventKey='second'>second</Tab.Pane> */}
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	)
}
export default AllCategories
