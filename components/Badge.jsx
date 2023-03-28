import styles from '@/styles/components/Badge.module.scss'

const Badge = ({ type }) => {
	return (
		<>
			{type === 'seller' && (
				<span className={`${styles.badge} ${styles.bestSeller}`}>
					Best Sellers
				</span>
			)}
			{type === 'new' && (
				<span className={`${styles.badge} ${styles.new}`}>New</span>
			)}
			{type === 'sale' && (
				<span className={`${styles.badge} ${styles.sale}`}>Sale</span>
			)}
			{type === 'soldout' && (
				<span className={`${styles.badge} ${styles.soldOut}`}>
					Sold out
				</span>
			)}
		</>
	)
}
export default Badge
