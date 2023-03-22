import styles from '@/styles/components/CustomLink.module.scss'
import { Rajdhani } from 'next/font/google'
import Link from 'next/link'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: [
		// '100',
		// '200',
		'300',
		'400',
		'500',
		'600',
		'700',
		// '800',
		// '900',
	],
})

const CustomLink = ({ href, variant, children }) => {
	return (
		<Link
			className={`${styles.link} ${
				variant === 'checkout' ? styles.checkout : styles.cart
			} ${rajdhani.className}`}
			href={href}
		>
			{children}
		</Link>
	)
}
export default CustomLink
