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
import { BsShieldShaded, BsTruck } from 'react-icons/bs'
import { RxStar } from 'react-icons/rx'
import { ImTruck } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'
import Link from 'next/link'

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

const settings1 = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	swipeToSlide: true,
	autoplay: true,
	autoplaySpeed: 4500,
	pauseOnFocus: true,
	arrows: false,

	responsive: [
		{
			breakpoint: 991.98,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
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
						<div className={styles.headerWrapper}>
							<h2 className={`${styles.title} ${rajdhani.className}`}>
								Recent blog posts
							</h2>
							<Link href='#' className={arimo.className}>
								View all
							</Link>
						</div>

						<Slider {...settings1} className={styles.blogSlide}>
							{blogs.map((blog, i) => (
								<BlogCard key={i} blog={blog} />
							))}
						</Slider>
					</Container>
				</section>
			</main>
		</Layout>
	)
}
