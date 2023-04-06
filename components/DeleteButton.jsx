import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { MdClose } from 'react-icons/md'
import styles from '@/styles/components/DeleteButton.module.scss'

const DeleteButton = () => {
	return (
		<>
			<OverlayTrigger
				placement='top'
				overlay={<Tooltip id='tooltip-top'>Delete</Tooltip>}
			>
				<Button className={styles.deleteButton}>
					<MdClose />
				</Button>
			</OverlayTrigger>
		</>
	)
}
export default DeleteButton
