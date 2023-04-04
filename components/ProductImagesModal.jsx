import { Carousel, Col, Modal, Row, Tab, Tabs } from 'react-bootstrap'
import styles from '@/styles/components/ProductImagesModal.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'
import CloseButton from './CloseButton'
import Image from 'next/image'
import { useState } from 'react'
import ReactPlayer from 'react-player'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const thumbnails = [
	{ id: 1, url: '/images/1.jpg', type: 'image' },
	{ id: 2, url: '/images/2.jpg', type: 'image' },
	{ id: 3, url: '/images/3.jpg', type: 'image' },
	{ id: 4, url: '/images/4.jpg', type: 'image' },
	{ id: 5, url: '/images/5.jpg', type: 'image' },
	{ id: 6, url: '/images/6.jpg', type: 'image' },
	{ id: 7, url: '/images/7.png', type: 'video' },
]

const ProductImagesModal = ({
	show,
	handleClose,
	thumbnail,
	thumbnailIndex,
}) => {
	const [index, setIndex] = useState(0)
	const [key, setKey] = useState('video')

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}

	const handleUpdate = () => {
		if (thumbnail.type === 'video') {
			setKey('video')
		} else {
			setKey('image')
			setIndex(thumbnailIndex)
		}
	}

	return (
		<Modal
			className={styles.mainWrapper}
			show={show}
			onHide={handleClose}
			size='xl'
			onShow={handleUpdate}
			centered
		>
			<Modal.Header className={styles.header}>
				<Modal.Title className={`${styles.title} ${rajdhani.className}`}>
					<span className={styles.brand}>Panasonic</span>
					Haydon 16 Way 1U Rack Mount Power Supply 16 Amp Fused
				</Modal.Title>
				<CloseButton handleClose={handleClose} variant='dark' />
			</Modal.Header>
			<Modal.Body className={styles.body}>
				<Tabs
					id='controlled-tab-example'
					activeKey={key}
					onSelect={k => setKey(k)}
					className={`product-images-navigation ${rajdhani.className}`}
				>
					<Tab
						eventKey='video'
						title='Videos'
						className={`${styles.tabBody} ${arimo.className}`}
					>
						<ReactPlayer
							url='/images/video.mp4'
							width='50%'
							height='350px'
							controls={true}
							light={
								<img
									src='/images/7.png'
									alt='thumbnail'
									style={{ width: '100%' }}
								/>
							}
						/>
					</Tab>
					<Tab
						eventKey='image'
						title='Images'
						className={`${styles.tabBody} ${arimo.className}`}
					>
						<Row>
							<Col xs={7} className={styles.modalLeft}>
								<Carousel
									activeIndex={index}
									onSelect={handleSelect}
									className='productImagesModalCarousel'
									indicators={false}
									interval={null}
									fade={true}
								>
									{thumbnails
										.filter(item => item.type === 'image')
										.map((picture, i) => (
											<Carousel.Item key={i}>
												<Image src={picture.url} alt='' fill />
											</Carousel.Item>
										))}
								</Carousel>
							</Col>
							<Col xs={5} className={styles.modalRight}>
								{/* <h4 className={rajdhani.className}>Product Image</h4> */}

								<div className={styles.thumbnailsWrapper}>
									{thumbnails
										.filter(item => item.type === 'image')
										.map((picture, i) => (
											<div
												key={i}
												className={`${styles.imageWrapper} ${
													index === i ? styles.active : ''
												}`}
												onClick={() => setIndex(i)}
											>
												<Image src={picture.url} alt='' fill />
											</div>
										))}
								</div>
							</Col>
						</Row>
					</Tab>
				</Tabs>
			</Modal.Body>
		</Modal>
	)
}
export default ProductImagesModal
