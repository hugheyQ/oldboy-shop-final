import Layout from '@/components/Layout'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import styles from '@/styles/pages/Register.module.scss'
import InputField from '@/components/InputField'
import { Arimo, Rajdhani } from 'next/font/google'
import Link from 'next/link'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const register = () => {
	return (
		<Layout title='Register'>
			<section className={styles.mainWrapper}>
				<Container>
					<Row>
						<Col xs={12} lg={6} className={styles.accountSignInWrapper}>
							<h3 className={rajdhani.className}>Create an Account</h3>

							<Form>
								<InputField
									type='email'
									label='Email Address'
									controlId='email'
								/>
								<InputField
									type='password'
									label='Password'
									controlId='password'
								/>

								<Row>
									<Col xs={12} md={6}>
										<Button
											className={`${styles.submitButton} ${rajdhani.className}`}
										>
											Sign in
										</Button>
									</Col>
									<Col xs={12} md={6} className='d-flex align-items-center'>
										<Link href='#' className={arimo.className}>
											Forgot your password?
										</Link>
									</Col>
								</Row>
							</Form>
						</Col>
						<Col
							xs={12}
							lg={6}
							className={`${styles.accountInformationWrapper} ${arimo.className}`}
						></Col>
					</Row>
				</Container>
			</section>
		</Layout>
	)
}
export default register
