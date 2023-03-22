import { HiOutlineMail, HiOutlineMenuAlt1 } from 'react-icons/hi'
import { TbPhoneCall } from 'react-icons/tb'
import { BsCart, BsChevronDown, BsSearch } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import styles from '@/styles/components/Header.module.scss'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import {
	Nav,
	Navbar,
	NavDropdown,
	Container,
	Col,
	Dropdown,
	Form,
	Row,
	Button,
	ListGroup,
} from 'react-bootstrap'
import Link from 'next/link'
import { useState } from 'react'
import SearchField from './SearchField'
import AllCategories from './AllCategories'
import Cart from './Cart'
import CartPopover from './CartPopover'

import { Rajdhani, Arimo } from 'next/font/google'
import Menu from './Menu'
import CategoriesMenu from './CategoriesMenu'
import Search from './Search'
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

const arimo = Arimo({
	subsets: ['latin'],
	weight: [
		// '100',
		// '200',
		// '300',
		'400',
		'500',
		'600',
		'700',
		// '800',
		// '900',
	],
})

const networkCat = data.categories[0]
const securityCat = data.categories[1]

const Header = () => {
	const [currency, setCurrency] = useState('GH')

	const [showCart, setShowCart] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	const [showCategories, setShowCategories] = useState(false)
	const [showSearch, setShowSearch] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')

	const handleCloseCart = () => setShowCart(false)
	const handleShowCart = () => setShowCart(true)

	const handleMenuClose = () => setShowMenu(false)
	const handleMenuShow = () => setShowMenu(true)

	const handleCategoriesClose = () => setShowCategories(false)
	const handleCategoriesShow = () => {
		setShowCategories(true)
	}

	const handleSearchClose = () => setShowSearch(false)
	const handleSearchShow = () => setShowSearch(true)

	return (
		<div className={`${styles.mainWrapper} ${arimo.className}`}>
			<Menu
				show={showMenu}
				handleClose={handleMenuClose}
				handleCategoryOpen={handleCategoriesShow}
			/>
			<Cart show={showCart} handleClose={handleCloseCart} />
			<CategoriesMenu
				show={showCategories}
				handleClose={handleCategoriesClose}
			/>
			<Search
				show={showSearch}
				handleClose={handleSearchClose}
				setSearchTerm={setSearchTerm}
				searchTerm={searchTerm}
			/>

			<div className={styles.topSection}>
				<Container>
					<Row>
						<Col md={5} xl={4}>
							<ul className={styles.contactLinks}>
								<li className={styles.link}>
									<TbPhoneCall />
									<Link href='tel:0261989626'>026 1989 626</Link>
								</li>
								<li className={styles.link}>
									<HiOutlineMail />
									<Link href='mailto:support@onlineshop.com'>
										support@onlineshop.com
									</Link>
								</li>
							</ul>
						</Col>
						<Col md={4} xl={4}>
							<p className={styles.message}>
								We are open with limited hours and staff.
							</p>
						</Col>
						<Col md={3} xl={4}>
							{/* <Form.Select
								className={styles.currencySelector}
								aria-label='Currency selector'
								defaultValue={1}
							>
								<option value='1'>
									<i className='fi fi-gr'></i>GH
								</option>
								<option value='2'>GBP</option>
							</Form.Select> */}
							<Dropdown className={styles.currencySelectorWrapper}>
								<Dropdown.Toggle>
									{currency === 'GH' ? (
										<>
											<span className='fi fi-gh'></span> GHC
										</>
									) : (
										<>
											<span className='fi fi-gb'></span> GBP
										</>
									)}
									<BsChevronDown />
								</Dropdown.Toggle>

								<Dropdown.Menu className={styles.currencyMenu}>
									<Dropdown.Item
										href='#'
										className={styles.currency}
										onClick={() => setCurrency('GH')}
									>
										<span className='fi fi-gh'></span> GHC
									</Dropdown.Item>
									<Dropdown.Item
										href='#'
										className={styles.currency}
										onClick={() => setCurrency('GB')}
									>
										<span className='fi fi-gb'></span> GBP
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Col>
					</Row>
				</Container>
			</div>
			<div className={styles.middleSection}>
				<Container>
					<Row>
						<Col xs={4} md={4} className='d-lg-none'>
							<ul className={styles.actionIcons}>
								<li>
									<Link href='#' onClick={handleMenuShow}>
										<HiOutlineMenuAlt1 />
									</Link>
								</li>
								<li>
									<Link href='#'>
										<BsSearch />
									</Link>
								</li>
							</ul>
						</Col>
						<Col xs={4} md={4} lg={3} className={styles.left}>
							<div className={styles.logo}>Logo</div>
						</Col>
						<Col lg={6} className={styles.middle}>
							<SearchField
								handleSearchShow={handleSearchShow}
								setSearchTerm={setSearchTerm}
								searchTerm={searchTerm}
								activateModal
							/>
						</Col>
						<Col xs={4} md={4} lg={3} className={styles.right}>
							<ul className={styles.actionIcons}>
								<li className={styles.offCanvasCartBtn}>
									<Link
										href='#'
										className={styles.cart}
										onClick={handleShowCart}
									>
										<BsCart />
										<span>3</span>
									</Link>
								</li>
								<li className={styles.popoverCartBtn}>
									<CartPopover />
								</li>
								<li>
									<Dropdown className={styles.accountButtonsWrapper}>
										<Dropdown.Toggle>
											<VscAccount />
										</Dropdown.Toggle>

										<Dropdown.Menu className={styles.actionButtonsMenu}>
											<Dropdown.Item href='#/login'>Login</Dropdown.Item>
											<Dropdown.Item href='#/register'>Register</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
			<div className={`${styles.bottomSection} ${rajdhani.className}`}>
				<Container className='position-relative d-flex align-items-center justify-content-between'>
					<Nav className={styles.navigation}>
						<Nav.Item className={styles.navigationItem}>
							<Nav.Link href='/' className={styles.navigationLink}>
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className={styles.navigationItem}>
							<Nav.Link href='#' className={styles.navigationLink}>
								Categories
							</Nav.Link>
							<div
								className={styles.categoriesWrapper}
								style={{ gridTemplateColumns: 'unset' }}
							>
								<AllCategories />
							</div>
						</Nav.Item>
						<Nav.Item className={styles.navigationItem}>
							<Nav.Link href='#' className={styles.navigationLink}>
								Networking
							</Nav.Link>
							<div className={styles.categoriesWrapper}>
								{networkCat.subCategories.map((subCategory, i) => (
									<div key={i} className={styles.subCategory}>
										<h2>{subCategory.title}</h2>
										<Nav className={styles.subCategoryLinks}>
											{subCategory.links.map((link, i) => (
												<Nav.Link key={i} href={`/${link.slug}`}>
													{link.title}
												</Nav.Link>
											))}
										</Nav>
									</div>
								))}
							</div>
						</Nav.Item>
						<Nav.Item className={styles.navigationItem}>
							<Nav.Link href='#' className={styles.navigationLink}>
								Security
							</Nav.Link>
							<div className={styles.categoriesWrapper}>
								{securityCat.subCategories.map((subCategory, i) => (
									<div key={i} className={styles.subCategory}>
										<h2>{subCategory.title}</h2>
										<Nav className={styles.subCategoryLinks}>
											{subCategory.links.map((link, i) => (
												<Nav.Link key={i} href={`/${link.slug}`}>
													{link.title}
												</Nav.Link>
											))}
										</Nav>
									</div>
								))}
							</div>
						</Nav.Item>
						<Nav.Item className={styles.navigationItem}>
							<Nav.Link href='#' className={styles.navigationLink}>
								Flash Deal
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className={styles.navigationItem}>
							<Nav.Link href='#' className={styles.navigationLink}>
								Contact Us
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className={styles.navigationItem}>
							<Nav.Link href='#' className={styles.navigationLink}>
								Blog
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Container>
			</div>
		</div>
	)
}
export default Header
