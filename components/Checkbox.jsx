import styles from '@/styles/components/Checkbox.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const Checkbox = ({ label, id, name, handleSelect, selected }) => {
	return (
		<label
			className={`${styles.mainWrapper} ${arimo.className}`}
			htmlFor={id}
		>
			{label}
			<input
				type='checkbox'
				name={name}
				id={id}
				onChange={handleSelect}
				defaultChecked={selected}
			/>
			<span className={styles.checkmark}></span>
		</label>
	)
}
export default Checkbox
