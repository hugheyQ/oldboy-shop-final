import styles from '@/styles/components/InputField.module.scss'
import { Arimo } from 'next/font/google'
import { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

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
	let [count, setCount] = useState(1)

	const handleCountIncrease = () => {
		setCount(++count)
	}
	const handleCountDecrease = () => {
		if (count > 1) {
			setCount(--count)
		}
	}

	return (
		<>
			{variant === 'number' ? (
				<Form.Group
					controlId={controlId}
					className={`${styles.mainWrapper} ${styles.mainWrapper}  ${arimo.className}`}
				>
					{label && (
						<Form.Label className={styles.quantityLabel}>
							{label}:
						</Form.Label>
					)}

					<InputGroup className={styles.quantityInputWrapper}>
						<Button onClick={handleCountDecrease}>
							<BiChevronDown />
						</Button>
						<Form.Control
							type={variant}
							placeholder={placeholder}
							required={required}
							value={count}
							onChange={e => setCount(e.target.value)}
						/>
						<Button onClick={handleCountIncrease}>
							<BiChevronUp />
						</Button>
					</InputGroup>
					{error && (
						<Form.Text className={styles.message}>{error}</Form.Text>
					)}
				</Form.Group>
			) : (
				<Form.Group
					controlId={controlId}
					className={`${styles.mainWrapper} ${arimo.className}`}
				>
					{label && (
						<Form.Label className={styles.label}>{label}:</Form.Label>
					)}

					<Form.Control
						type={variant}
						placeholder={placeholder}
						className={styles.input}
						required={required}
					/>
					{error && (
						<Form.Text className={styles.message}>{error}</Form.Text>
					)}
				</Form.Group>
			)}
		</>
	)
}

InputField.defaultProps = {
	variant: 'text',
	error: false,
	placeholder: '',
	required: false,
}

export default InputField
