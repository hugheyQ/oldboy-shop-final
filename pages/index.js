import BannerCarousel from '@/components/BannerCarousel'
import Layout from '@/components/Layout'
import { Container } from 'react-bootstrap'
import styles from '@/styles/pages/Home.module.scss'
import ProductsShowcase from '@/components/ProductsShowcase'

export default function Home() {
	return (
		<Layout title='Home'>
			<main className={styles.mainWrapper}>
				<BannerCarousel />
				<section className={styles.section1}>
					<Container>
						<ProductsShowcase />
					</Container>
				</section>
			</main>
		</Layout>
	)
}
