import styles from '@/styles/components/CloseButton.module.scss'
import { Button } from 'react-bootstrap'
import { MdClose } from 'react-icons/md'

const CloseButton = ({ handleClose }) => {
	return (
		<Button className={styles.closeButton} onClick={handleClose}>
			<MdClose />
		</Button>
	)
}
export default CloseButton
