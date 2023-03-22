import styles from '@/styles/components/ScrollBackToTopButton.module.scss'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollBackToTopButton = () => {
	const [show, setShow] = useState(false)

	const handleScroll = () => {
		const scrollPosition = window.scrollY // => scroll position
		if (scrollPosition > 500) {
			setShow(true)
		} else {
			setShow(false)
		}
	}

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		handleScroll()
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<Button
			className={`${styles.mainWrapper} ${show ? styles.show : ''} `}
			onClick={() => handleScrollToTop()}
		>
			<AiOutlineArrowUp />
		</Button>
	)
}
export default ScrollBackToTopButton
