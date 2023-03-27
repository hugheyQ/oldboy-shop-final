import InputField from '@/components/InputField'
import Layout from '@/components/Layout'
import { Arimo, Rajdhani } from 'next/font/google'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import styles from '@/styles/pages/Login.module.scss'
import Link from 'next/link'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const login = () => {
	return (
		<Layout title='Login'>
			<section className={styles.mainWrapper}>
				<Container>
					<Row>
						<Col xs={12} lg={6} className={styles.accountSignInWrapper}>
							<h3 className={rajdhani.className}>Sign into account</h3>

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
						>
							<h3 className={rajdhani.className}>
								Don&apos;t have an account?
							</h3>

							<p>Create an account with us and you&apos;ll be able to:</p>

							<ul>
								<li>Check out faster</li>
								<li>Save multiple shipping addresses</li>
								<li>Access your order history</li>
								<li>Track new orders</li>
							</ul>

							<Row>
								<Col>
									<Link
										className={`${styles.createAccountLink} ${rajdhani.className}`}
										href='/register'
									>
										Create account
									</Link>
								</Col>
								<Col></Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	)
}
export default login
