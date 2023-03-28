import styles from '@/styles/components/Rating.module.scss'
import { MdStarRate } from 'react-icons/md'

const Rating = () => {
	return (
		<div className={styles.mainWrapper}>
			<MdStarRate />
			<MdStarRate />
			<MdStarRate />
			<MdStarRate />
			<MdStarRate />
		</div>
	)
}
export default Rating
