import styles from '@/styles/components/LoginOffCanvas.module.scss'
import { Button, Form, Offcanvas } from 'react-bootstrap'
import { Arimo, Rajdhani } from 'next/font/google'
import Link from 'next/link'
import CloseButton from './CloseButton'
import InputField from './InputField'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const LoginOffCanvas = ({ handleClose, show }) => {
	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			placement='end'
			className={styles.mainWrapper}
		>
			<Offcanvas.Header className={styles.header}>
				<Offcanvas.Title
					className={`${styles.title} ${rajdhani.className}`}
				>
					Customer Login
				</Offcanvas.Title>
				<CloseButton handleClose={handleClose} />
			</Offcanvas.Header>
			<Offcanvas.Body className={styles.body}>
				<Form>
					<InputField
						variant='email'
						controlId='email'
						label='Email Address'
					/>

					<InputField
						variant='password'
						controlId='passwoed'
						label='Password'
					/>

					<Button
						className={`${styles.submitButton} ${rajdhani.className}`}
					>
						Login
					</Button>
				</Form>

				<Link
					href='/recover-password'
					className={`${styles.recoverPasswordLink} ${arimo.className}`}
				>
					Forgot your password?
				</Link>

				<Link
					href='/register'
					className={`${styles.createAccountLink} ${rajdhani.className}`}
				>
					Create a new account
				</Link>
			</Offcanvas.Body>
		</Offcanvas>
	)
}
export default LoginOffCanvas
