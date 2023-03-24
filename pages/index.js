import BannerCarousel from '@/components/BannerCarousel'
import Layout from '@/components/Layout'
import { Container } from 'react-bootstrap'
import styles from '@/styles/pages/Home.module.scss'
import AllProductsShowcase from '@/components/AllProductsShowcase'
import SpecificProductsShowcase from '@/components/SpecificProductsShowcase'
import data from '@/utils/data'
import Product from '@/components/Product'
import { Arimo, Rajdhani } from 'next/font/google'
import Slider from 'react-slick'
import BlogCard from '@/components/BlogCard'

const { products, categories, blogs } = data

const networkingSubCategories = categories[0].subCategories
const securitySubCategories = categories[1].subCategories

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 2,
	swipeToSlide: true,
	autoplay: true,
	autoplaySpeed: 4500,
	pauseOnFocus: true,
	arrows: false,

	responsive: [
		{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}

export default function Home() {
	return (
		<Layout title='Home'>
			<main className={styles.mainWrapper}>
				<BannerCarousel />
				<section className={styles.section1}>
					<Container>
						<AllProductsShowcase />
					</Container>
				</section>

				<section className={styles.section2}>
					<Container>
						<SpecificProductsShowcase
							title='Networking'
							products={products}
							subCategories={networkingSubCategories}
						/>
					</Container>
				</section>

				<section className={styles.section3}>
					<Container>
						<SpecificProductsShowcase
							title='Security'
							products={products}
							subCategories={securitySubCategories}
						/>
					</Container>
				</section>

				<section className={styles.section4}>
					<Container>
						<h2 className={`${styles.title} ${rajdhani.className}`}>
							You may also like
						</h2>

						<div className={styles.productList}>
							{products.map((product, i) => (
								<Product key={i} product={product} variant='bordered' />
							))}
						</div>
					</Container>
				</section>
				<section className={styles.section5}>
					<Container>
						<h2 className={`${styles.title} ${rajdhani.className}`}>
							Recent blog posts
						</h2>

						<Slider {...settings} className={styles.blogSlide}>
							{blogs.map((blog, i) => (
								<BlogCard key={i} blog={blog} />
							))}
						</Slider>
					</Container>
				</section>

				<section className={styles.section6}>
					<Container className='d-flex align-items justify-content-between'>
						<div>Worldwide free shipping</div>
						<div>Rewards Program</div>
						<div>Secure Shopping</div>
						<div>30-Day free returns</div>
					</Container>
				</section>
			</main>
		</Layout>
	)
}
