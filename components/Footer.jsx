import styles from '@/styles/components/Footer.module.scss'
import data from '@/utils/data'
import { Arimo, Rajdhani } from 'next/font/google'
import Link from 'next/link'
import {
	Accordion,
	Button,
	Col,
	Container,
	Form,
	InputGroup,
	Nav,
	Row,
} from 'react-bootstrap'
import { BiSupport } from 'react-icons/bi'
import {
	BsFacebook,
	BsInstagram,
	BsShieldShaded,
	BsTwitter,
	BsYoutube,
} from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { HiOutlineMail } from 'react-icons/hi'
import { ImTruck } from 'react-icons/im'
import { RxStar } from 'react-icons/rx'
import { TbPhoneCall } from 'react-icons/tb'
import Slider from 'react-slick'
import InputField from './InputField'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const settings2 = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	swipeToSlide: true,
	autoplay: true,
	autoplaySpeed: 4500,
	pauseOnFocus: true,
	arrows: false,

	responsive: [
		{
			breakpoint: 1199.98,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			},
		},
		{
			breakpoint: 991.98,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 575.98,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}

const { categories } = data

const Footer = () => {
	return (
		<footer className={styles.mainWrapper}>
			<section className={`${styles.top} ${rajdhani.className}`}>
				<Container>
					<Slider {...settings2} className='benefits-slider'>
						<div className='benefit'>
							<ImTruck /> <span>Nationwide Delivery</span>
						</div>
						<div className='benefit'>
							<RxStar />
							<span>Rewards Program</span>
						</div>
						<div className='benefit'>
							<BsShieldShaded />
							<span>Secure Shopping</span>
						</div>
						<div className='benefit'>
							<BiSupport />
							<span>Experienced Support Staff</span>
						</div>
					</Slider>
				</Container>
			</section>
			<section className={styles.middle}>
				<Container>
					<h5 className={rajdhani.className}>
						Need help? Call our award-winning support team at{' '}
						<Link href='tel:0248983272'>+233 24 8983 272</Link>
					</h5>

					<Row className={styles.cards}>
						<Col
							xs={12}
							md={12}
							lg={5}
							className={styles.newsLetterSection}
						>
							<h6 className={rajdhani.className}>
								Subscribe to our newsletter
							</h6>
							<p className={arimo.className}>
								Get the latest updates on new products and upcoming sales
							</p>
							<Form>
								{/* <Row>
									<Col xs={7}>
										<InputField placeholder='Your email address' type='email' />
									</Col>
									<Col xs={3} className='p-0'>
										<Button
											className={`${styles.submitButton} ${rajdhani.className}`}
										>
											Subscribe
										</Button>
									</Col>
								</Row> */}

								<InputGroup className={styles.newsLetterInputWrapper}>
									<Form.Control
										placeholder='Your email address'
										aria-label='Your email address'
										aria-describedby='newsletter-signup'
									/>
									<Button
										id='newsletter-signup-button'
										className={`${styles.submitButton} ${rajdhani.className}`}
									>
										Subscribe
									</Button>
								</InputGroup>
							</Form>

							<div className={styles.socialMediaLinks}>
								<Link href='#'>
									<BsTwitter />
								</Link>
								<Link href='#'>
									<BsFacebook />
								</Link>
								<Link href='#'>
									<BsInstagram />
								</Link>
								<Link href='#'>
									<BsYoutube />
								</Link>
							</div>
						</Col>
						<Col xs={12} md={4} lg={2} className='d-none d-md-block'>
							<h6 className={rajdhani.className}>Shop</h6>

							<Nav className={`${styles.navigation} ${arimo.className}`}>
								{categories.map((category, i) => (
									<Nav.Link key={i} href='#' className={styles.navigationLink}>
										{category.title}
									</Nav.Link>
								))}
							</Nav>
						</Col>
						<Col xs={12} md={4} lg={2} className='d-none d-md-block'>
							<h6 className={rajdhani.className}>Information</h6>
							<Nav className={`${styles.navigation} ${arimo.className}`}>
								<Nav.Link href='#' className={styles.navigationLink}>
									Shop by brands
								</Nav.Link>
								<Nav.Link href='#' className={styles.navigationLink}>
									About us
								</Nav.Link>
								<Nav.Link href='#' className={styles.navigationLink}>
									Contact us
								</Nav.Link>
								<Nav.Link href='#' className={styles.navigationLink}>
									Flash deal
								</Nav.Link>
								<Nav.Link href='#' className={styles.navigationLink}>
									Blog
								</Nav.Link>
							</Nav>
						</Col>
						<Col xs={12} md={4} lg={3} className='d-none d-md-block'>
							<h6 className={rajdhani.className}>Contact</h6>
							<div
								className={`${styles.contactInfoWrapper} ${arimo.className}`}
							>
								<div className={styles.contactInfo}>
									<GoLocation />
									<Link href='#'>
										Tycan House, House NO. 43 <br />
										Tetteh Okuley Ave <br />
										Abofu - Achimota
									</Link>
								</div>

								<div className={styles.contactInfo}>
									<TbPhoneCall />
									<div>
										<Link href='#'>026 1989 626</Link>
										<Link href='#'>Ask an expert</Link>
									</div>
								</div>
								<div className={styles.contactInfo}>
									<HiOutlineMail />
									<Link href='#'>support@onlineshop.com</Link>
								</div>
							</div>
						</Col>
						<Col xs={12} className='d-md-none'>
							<Accordion flush className={styles.mobileCards}>
								<Accordion.Item eventKey='0' className={styles.mobileCard}>
									<Accordion.Header
										className={`${styles.mobileCardTitle} ${rajdhani.className}`}
									>
										Shop
									</Accordion.Header>
									<Accordion.Body
										className={`${styles.mobileCardBody} ${arimo.className}`}
									>
										<Nav
											className={`${styles.navigation} ${styles.mobileNavigation}`}
										>
											{categories.map((category, i) => (
												<Nav.Link
													key={i}
													href='#'
													className={styles.navigationLink}
												>
													{category.title}
												</Nav.Link>
											))}
										</Nav>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='1' className={styles.mobileCard}>
									<Accordion.Header
										className={`${styles.mobileCardTitle} ${rajdhani.className}`}
									>
										Information
									</Accordion.Header>
									<Accordion.Body
										className={`${styles.mobileCardBody} ${arimo.className}`}
									>
										<Nav
											className={`${styles.navigation} ${styles.mobileNavigation}`}
										>
											<Nav.Link href='#' className={styles.navigationLink}>
												Shop by brands
											</Nav.Link>
											<Nav.Link href='#' className={styles.navigationLink}>
												About us
											</Nav.Link>
											<Nav.Link href='#' className={styles.navigationLink}>
												Contact us
											</Nav.Link>
											<Nav.Link href='#' className={styles.navigationLink}>
												Flash deal
											</Nav.Link>
											<Nav.Link href='#' className={styles.navigationLink}>
												Blog
											</Nav.Link>
										</Nav>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='2' className={styles.mobileCard}>
									<Accordion.Header
										className={`${styles.mobileCardTitle} ${rajdhani.className}`}
									>
										Contact
									</Accordion.Header>
									<Accordion.Body
										className={`${styles.mobileCardBody} ${arimo.className}`}
									>
										<div
											className={`${styles.contactInfoWrapper} ${styles.mobileContactInfoWrapper} ${arimo.className}`}
										>
											<div className={styles.contactInfo}>
												<GoLocation />
												<Link href='#'>
													Tycan House, House NO. 43 <br />
													Tetteh Okuley Ave <br />
													Abofu - Achimota
												</Link>
											</div>

											<div className={styles.contactInfo}>
												<TbPhoneCall />
												<div>
													<Link href='#'>026 1989 626</Link>
													<Link href='#'>Ask an expert</Link>
												</div>
											</div>
											<div className={styles.contactInfo}>
												<HiOutlineMail />
												<Link href='#'>support@onlineshop.com</Link>
											</div>
										</div>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>
					</Row>
				</Container>
			</section>
			<section className={styles.bottom}>
				<p>&#169; 2023 Online Shop. All Rights Reserved.</p>
			</section>
		</footer>
	)
}
export default Footer
