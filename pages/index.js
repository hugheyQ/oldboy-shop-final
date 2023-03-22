import BannerCarousel from '@/components/BannerCarousel'
import Layout from '@/components/Layout'
import { Container } from 'react-bootstrap'
import styles from '@/styles/pages/Home.module.scss'

export default function Home() {
	return (
		<Layout title='Home'>
			<main className={styles.mainWrapper}>
				<BannerCarousel />
				{/* <Container>
					<BannerCarousel />
				</Container> */}
			</main>
		</Layout>
	)
}
