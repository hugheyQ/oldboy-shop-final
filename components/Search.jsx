import { Modal, Button } from 'react-bootstrap'
import { MdClose } from 'react-icons/md'
import SearchField from './SearchField'
import CartItem from './CartItem'
import styles from '@/styles/components/Search.module.scss'
import { Rajdhani } from 'next/font/google'

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
					Found 24 Results <span className={styles.cta}>View all</span>
				</Modal.Title>
				<Button className={styles.closeButton} onClick={handleClose}>
					<MdClose />
				</Button>
			</Modal.Header>
			<Modal.Body className={styles.body}>
				<SearchField
					setSearchTerm={setSearchTerm}
					searchTerm={searchTerm}
				/>

				<CartItem />
				<CartItem />

				<div className={styles.footer}></div>
			</Modal.Body>
		</Modal>
	)
}
export default Search
