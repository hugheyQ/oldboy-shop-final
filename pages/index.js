import BannerCarousel from '@/components/BannerCarousel'
import Layout from '@/components/Layout'
import { Container } from 'react-bootstrap'
import styles from '@/styles/pages/Home.module.scss'
import AllProductsShowcase from '@/components/AllProductsShowcase'
import SpecificProductsShowcase from '@/components/SpecificProductsShowcase'

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
						<SpecificProductsShowcase />
					</Container>
				</section>
			</main>
		</Layout>
	)
}
