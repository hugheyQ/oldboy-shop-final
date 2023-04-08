import { Carousel, Container } from 'react-bootstrap'
import styles from '@/styles/components/BannerCarousel.module.scss'
import data from '@/utils/data'
import Image from 'next/image'
import { Arimo, Rajdhani } from 'next/font/google'
import Link from 'next/link'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const { carouselItems } = data

const BannerCarousel = () => {
	return (
		<Carousel className='homepage-banner'>
			{carouselItems.map((item, i) => (
				<Carousel.Item key={i} className='carousel-item'>
					<Image
						className='carousel-image'
						src={item.imageUrl}
						alt={item.imageAlt}
						fill
					/>
					<Carousel.Caption className='carousel-caption'>
						<h3 className={rajdhani.className}>{item.title}</h3>
						<p className={arimo.className}>{item.description}</p>

						<Link href='#' className={rajdhani.className}>
							Shop Now
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	)
}
export default BannerCarousel
