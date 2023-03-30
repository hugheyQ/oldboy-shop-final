import styles from '@/styles/components/AdditionalInfoSectionMobile.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Accordion } from 'react-bootstrap'
import { BsShieldCheck } from 'react-icons/bs'
import { FaBook } from 'react-icons/fa'
import Slider from 'react-slick'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const thumbnails = [
	{ url: '/images/1.jpg', type: 'image' },
	{ url: '/images/2.jpg', type: 'image' },
	{ url: '/images/3.jpg', type: 'image' },
	{ url: '/images/4.jpg', type: 'image' },
	{ url: '/images/5.jpg', type: 'image' },
	{ url: '/images/6.jpg', type: 'image' },
	{ url: '/images/7.png', type: 'video' },
]

const settings = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
	swipeToSlide: true,
	autoplay: false,
	autoplaySpeed: 5000,
	pauseOnFocus: true,
	arrows: false,

	responsive: [
		{
			breakpoint: 1199.98,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 991.98,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		// {
		// 	breakpoint: 767.98,
		// 	settings: {
		// 		slidesToShow: 2,
		// 		slidesToScroll: 2,
		// 	},
		// },
		{
			breakpoint: 575.98,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
	],
}

const AdditionalInfoSectionMobile = () => {
	return (
		<Accordion
			flush
			className={`${styles.mainWrapper} ${arimo.className} d-sm-none`}
		>
			<Accordion.Item eventKey='1' className={styles.infoCategory}>
				<Accordion.Header
					className={`${styles.infoCategoryTitle} ${rajdhani.className}`}
				>
					Description
				</Accordion.Header>
				<Accordion.Body className={styles.infoCategoryBody}>
					<section>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
							quia nemo ducimus libero eligendi, porro ipsum possimus modi
							mollitia, officiis repellat delectus quisquam cum veniam
							repudiandae rem! Odit, veritatis veniam?
						</p>

						<div className={styles.imageWrapper}>
							<Image src='/images/bannerImage2.jpg' fill alt='' />
						</div>
					</section>

					<section>
						<h4 className={rajdhani.className}>Sample unordered list</h4>
						<ul>
							<li>Comodous in tempor ullamcorper miaculis</li>
							<li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
							<li>Divamus sit amet purus justo.</li>
						</ul>
					</section>

					<section>
						<h4 className={rajdhani.className}>Sample unordered list</h4>
						<ul>
							<li>Comodous in tempor ullamcorper miaculis</li>
							<li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
							<li>Divamus sit amet purus justo.</li>
						</ul>
					</section>

					<section>
						<Slider {...settings} className='product-more-info-slider'>
							{thumbnails.map((thumbnail, i) => (
								<div className='image-wrapper' key={i}>
									<Image src={thumbnail.url} alt='' fill />
								</div>
							))}
						</Slider>
					</section>

					<section>
						<h4 className={rajdhani.className}>Sample Block quote</h4>

						<blockquote cite='#'>
							Nam tempus turpis at metus scelerisque placerat nulla deumantos
							solicitud felis. Pellentesque diam dolor, elementum etos
							lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
							mattis drostique des commodo pharetras loremos.
						</blockquote>

						<p>
							Nam tempus turpis at metus scelerisque placerat nulla deumantos
							solicitud felis. Pellentesque diam dolor, elementum etos
							lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
							mattis drostique des commodo pharetras loremos. Donec pretium
							egestas sapien an mollis. Suspendisse vestibulum lectus in
							lectus volutpat danos dapibus purus pulvinar.
						</p>
					</section>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey='2' className={styles.infoCategory}>
				<Accordion.Header
					className={`${styles.infoCategoryTitle} ${rajdhani.className}`}
				>
					Shipping & Returns
				</Accordion.Header>
				<Accordion.Body className={styles.infoCategoryBody}>
					<section>
						<p className='fst-italic'>
							Nam tempus turpis at metus scelerisque placerat nulla deumantos
							solicitud felis. Pellentesque diam dolor, elementum etos
							lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
							mattis drostique des commodo pharetras loremos.
						</p>
					</section>

					<section>
						<h4 className={rajdhani.className}>Returns Policy</h4>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
							ut blandit risus. Donec mollis nec tellus et rutrum. Orci
							varius natoque penatibus et magnis dis parturient montes,
							nascetur ridiculus mus. Ut consequat quam a purus faucibus
							scelerisque. Mauris ac dui ante. Pellentesque congue porttitor
							tempus. Donec sodales dapibus urna sed dictum. Duis congue
							posuere libero, a aliquam est porta quis.
						</p>

						<p>
							Donec ullamcorper magna enim, vitae fermentum turpis elementum
							quis. Interdum et malesuada fames ac ante ipsum primis in
							faucibus.
						</p>

						<p>
							Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam rutrum
							tempor ex ac rutrum. Maecenas nunc nulla, placerat at eleifend
							in, viverra etos sem. Nam sagittis lacus metus, dignissim
							blandit magna euismod eget. Suspendisse a nisl lacus. Phasellus
							eget augue tincidunt, sollicitudin lectus sed, convallis desto.
							Pellentesque vitae dui lacinia, venenatis erat sit amet,
							fringilla felis. Nullam maximus nisi nec mi facilisis.
						</p>
					</section>

					<section>
						<h4 className={rajdhani.className}>Shipping</h4>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
							ut blandit risus. Donec mollis nec tellus et rutrum. Orci
							varius natoque penatibus et magnis dis parturient montes,
							nascetur ridiculus mus. Ut consequat quam a purus faucibus
							scelerisque. Mauris ac dui ante. Pellentesque congue porttitor
							tempus. Donec sodales dapibus urna sed dictum. Duis congue
							posuere libero, a aliquam est porta quis.
						</p>

						<p>
							Donec ullamcorper magna enim, vitae fermentum turpis elementum
							quis. Interdum et malesuada fames ac ante ipsum primis in
							faucibus.
						</p>

						<p>
							Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam rutrum
							tempor ex ac rutrum. Maecenas nunc nulla, placerat at eleifend
							in, viverra etos sem. Nam sagittis lacus metus, dignissim
							blandit magna euismod eget. Suspendisse a nisl lacus. Phasellus
							eget augue tincidunt, sollicitudin lectus sed, convallis desto.
							Pellentesque vitae dui lacinia, venenatis erat sit amet,
							fringilla felis. Nullam maximus nisi nec mi facilisis.
						</p>
					</section>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey='3' className={styles.infoCategory}>
				<Accordion.Header
					className={`${styles.infoCategoryTitle} ${rajdhani.className}`}
				>
					Resources
				</Accordion.Header>
				<Accordion.Body className={styles.infoCategoryBody}>
					<section className={styles.resourcesWrapper}>
						<Link href='#'>
							<FaBook /> Instruction Manual
						</Link>
						<Link href='#'>
							<BsShieldCheck /> Warranty
						</Link>
					</section>
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item eventKey='4' className={styles.infoCategory}>
				<Accordion.Header
					className={`${styles.infoCategoryTitle} ${rajdhani.className}`}
				>
					faq
				</Accordion.Header>
				<Accordion.Body className={styles.infoCategoryBody}>
					<section className={styles.faqWrapper}>
						<p className='fst-italic'>
							Nam tempus turpis at metus scelerisque placerat nulla deumantos
							solicitud felis. Pellentesque diam dolor, elementum etos
							lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
							mattis drostique des commodo pharetras loremos.
						</p>

						<Accordion
							flush
							className={`${styles.faqs} ${arimo.className}`}
						>
							<Accordion.Item eventKey='1' className={styles.faqItem}>
								<Accordion.Header className={styles.faqTitle}>
									Nam tempus turpis at metus scelerisque placerat nulla
									deumantos?
								</Accordion.Header>
								<Accordion.Body className={styles.faqBody}>
									<p>
										Nam tempus turpis at metus scelerisque placerat nulla
										deumantos solicitud felis. Pellentesque diam dolor,
										elementum etos lobortis des mollis ut risus. Sedcus faucibus
										an sullamcorper mattis drostique des commodo pharetras
										loremos. Donec pretium egestas sapien an mollis. Suspendisse
										vestibulum lectus in lectus volutpat danos dapibus purus
										pulvinar.
									</p>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='2' className={styles.faqItem}>
								<Accordion.Header className={styles.faqTitle}>
									Nam tempus turpis at metus scelerisque placerat nulla
									deumantos?
								</Accordion.Header>
								<Accordion.Body className={styles.faqBody}>
									<p>
										Nam tempus turpis at metus scelerisque placerat nulla
										deumantos solicitud felis. Pellentesque diam dolor,
										elementum etos lobortis des mollis ut risus. Sedcus faucibus
										an sullamcorper mattis drostique des commodo pharetras
										loremos. Donec pretium egestas sapien an mollis. Suspendisse
										vestibulum lectus in lectus volutpat danos dapibus purus
										pulvinar.
									</p>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='3' className={styles.faqItem}>
								<Accordion.Header className={styles.faqTitle}>
									Nam tempus turpis at metus scelerisque placerat nulla
									deumantos?
								</Accordion.Header>
								<Accordion.Body className={styles.faqBody}>
									<p>
										Nam tempus turpis at metus scelerisque placerat nulla
										deumantos solicitud felis. Pellentesque diam dolor,
										elementum etos lobortis des mollis ut risus. Sedcus faucibus
										an sullamcorper mattis drostique des commodo pharetras
										loremos. Donec pretium egestas sapien an mollis. Suspendisse
										vestibulum lectus in lectus volutpat danos dapibus purus
										pulvinar.
									</p>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='4' className={styles.faqItem}>
								<Accordion.Header className={styles.faqTitle}>
									Nam tempus turpis at metus scelerisque placerat nulla
									deumantos?
								</Accordion.Header>
								<Accordion.Body className={styles.faqBody}>
									<p>
										Nam tempus turpis at metus scelerisque placerat nulla
										deumantos solicitud felis. Pellentesque diam dolor,
										elementum etos lobortis des mollis ut risus. Sedcus faucibus
										an sullamcorper mattis drostique des commodo pharetras
										loremos. Donec pretium egestas sapien an mollis. Suspendisse
										vestibulum lectus in lectus volutpat danos dapibus purus
										pulvinar.
									</p>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='5' className={styles.faqItem}>
								<Accordion.Header className={styles.faqTitle}>
									Nam tempus turpis at metus scelerisque placerat nulla
									deumantos?
								</Accordion.Header>
								<Accordion.Body className={styles.faqBody}>
									<p>
										Nam tempus turpis at metus scelerisque placerat nulla
										deumantos solicitud felis. Pellentesque diam dolor,
										elementum etos lobortis des mollis ut risus. Sedcus faucibus
										an sullamcorper mattis drostique des commodo pharetras
										loremos. Donec pretium egestas sapien an mollis. Suspendisse
										vestibulum lectus in lectus volutpat danos dapibus purus
										pulvinar.
									</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</section>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	)
}
export default AdditionalInfoSectionMobile
