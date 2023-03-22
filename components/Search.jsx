import { Modal, Button } from 'react-bootstrap'
import { MdClose } from 'react-icons/md'
import SearchField from './SearchField'
import CartItem from './CartItem'
import styles from '@/styles/components/Search.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'
import Link from 'next/link'
import data from '@/utils/data'
import CloseButton from './CloseButton'

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

const arimo = Arimo({
	subsets: ['latin'],
	weight: [
		// '100',
		// '200',
		// '300',
		'400',
		'500',
		'600',
		'700',
		// '800',
		// '900',
	],
})

const Search = ({ show, handleClose, setSearchTerm, searchTerm }) => {
	return (
		<Modal
			className={styles.mainWrapper}
			show={show}
			onHide={handleClose}
			size='lg'
			fullscreen='lg-down'
			centered
		>
			<Modal.Header className={styles.header}>
				<Modal.Title className={`${styles.title} ${rajdhani.className}`}>
					Search Results
				</Modal.Title>
				<CloseButton handleClose={handleClose} />
			</Modal.Header>
			<Modal.Body className={styles.body}>
				<SearchField
					setSearchTerm={setSearchTerm}
					searchTerm={searchTerm}
				/>

				<div className={`${styles.meta} ${arimo.className}`}>
					<span>Found 24 products</span>
					<Link href='#'>View all</Link>
				</div>

				<div>
					{data.products.map((product, i) => (
						<CartItem key={i} product={product} />
					))}
				</div>

				<div className={styles.footer}></div>
			</Modal.Body>
		</Modal>
	)
}
export default Search
