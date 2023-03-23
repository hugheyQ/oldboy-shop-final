import styles from '@/styles/components/InputField.module.scss'
import { Arimo } from 'next/font/google'
import { Form } from 'react-bootstrap'

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const InputField = ({
	variant,
	placeholder,
	controlId,
	required,
	label,
	error,
}) => {
	return (
		<Form.Group
			controlId={controlId}
			className={`${styles.mainWrapper} ${arimo.className}`}
		>
			<Form.Label className={styles.label}>{label}:</Form.Label>
			<Form.Control
				type={variant}
				placeholder={placeholder}
				className={styles.input}
				required={required}
			/>
			{error && (
				<Form.Text className={styles.message}>
					We'll never share your email with anyone else.
				</Form.Text>
			)}
		</Form.Group>
	)
}

InputField.defaultProps = {
	variant: 'text',
	error: false,
	placeholder: '',
	required: false,
}

export default InputField
