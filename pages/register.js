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
					<Row style={{ display: 'flex', alignItems: 'flex-start' }}>
						<Col xs={12} lg={7} className={styles.left}>
							<h3 className={rajdhani.className}>Create an Account</h3>

							<Form>
								<InputField type='text' label='Full Name' controlId='fname' />
								<InputField
									type='text'
									label='Company Name'
									controlId='company'
								/>
								<InputField
									type='email'
									label='Email Address'
									controlId='email'
								/>
								<InputField
									type='text'
									label='Phone number'
									controlId='phone'
								/>
								<Row className='d-flex' style={{ rowGap: '1em' }}>
									<Col xs={12} lg={6}>
										<InputField
											type='password'
											label='Password'
											controlId='password'
										/>
									</Col>
									<Col xs={12} lg={6}>
										<InputField
											type='password'
											label='Confirm Password'
											controlId='cpassword'
										/>
									</Col>
								</Row>

								<Row>
									<Col xs={12}>
										<Button
											className={`${styles.submitButton} ${rajdhani.className}`}
										>
											Create account
										</Button>
									</Col>
									<Col xs={12} md={6}></Col>
								</Row>
							</Form>
						</Col>
						<Col
							xs={12}
							lg={5}
							className={`${styles.right} ${arimo.className}`}
						>
							<h3 className={rajdhani.className}>
								Already have an Account?
							</h3>
							<p>Sign into your account and you&apos;ll be able to:</p>

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
										href='/login'
									>
										Sign In
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
export default register
