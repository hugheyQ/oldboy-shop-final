import { Button, Form, InputGroup } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import styles from '@/styles/components/SearchField.module.scss'

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
					placeholder='What are you looking for...'
					aria-label='Product search'
					aria-describedby='searchField'
					className={styles.searchInput}
					type='search'
					defaultValue={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<Button type='submit' className={styles.searchButton}>
					Search
				</Button>
			</InputGroup>
		</Form>
	)
}
export default SearchField
