import { Button, Form, InputGroup } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import styles from '@/styles/components/SearchField.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const SearchField = ({
	setSearchTerm,
	handleSearchShow,
	searchTerm,
	activateModal,
}) => {
	const handleFormSubmit = e => {
		e.preventDefault()
		if (activateModal) {
			handleSearchShow()
			console.log(searchTerm)
		} else {
			console.log(searchTerm)
		}
	}
	return (
		<Form onSubmit={handleFormSubmit}>
			<InputGroup className={styles.mainWrapper}>
				<InputGroup.Text id='searchField' className={styles.searchIcon}>
					<BsSearch />
				</InputGroup.Text>
				<Form.Control
					placeholder='What are you looking for...1'
					aria-label='Product search'
					aria-describedby='searchField'
					className={`${styles.searchInput} ${arimo.className}`}
					type='search'
					defaultValue={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<Button
					type='submit'
					className={`${styles.searchButton} ${rajdhani.className}`}
				>
					Search
				</Button>
			</InputGroup>
		</Form>
	)
}
export default SearchField
