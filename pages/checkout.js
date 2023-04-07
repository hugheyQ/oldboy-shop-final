import Layout from '@/components/Layout'
import {
	Accordion,
	Button,
	Col,
	Container,
	Form,
	Row,
} from 'react-bootstrap'
import styles from '@/styles/pages/Checkout.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'
import InputField from '@/components/InputField'
import Link from 'next/link'
import { useState } from 'react'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const checkout = () => {
	const [customerFormIndex, setCustomerFormIndex] = useState(0)

	return (
		<Layout title='Checkout'>
			<main className={`${styles.mainWrapper} ${arimo.className}`}>
				<section>
					<Container>
						{/* <h2 className={rajdhani.className}>Checkout</h2> */}

						<Row>
							<Col xs={7} className={styles.left}>
								<Accordion
									defaultActiveKey='0'
									flush
									alwaysOpen
									className={styles.checkoutSections}
								>
									<Accordion.Item
										eventKey='0'
										className={styles.checkoutSection}
									>
										<Accordion.Header
											className={`${styles.checkoutSectionTitle} ${rajdhani.className}`}
										>
											Customer
										</Accordion.Header>
										<Accordion.Body className={styles.checkoutSectionBody}>
											<Form
												className={`${styles.firstForm} ${
													customerFormIndex === 0 && styles.active
												}`}
											>
												<Row>
													<Col xs={8}>
														<InputField
															variant='email'
															controlId='email'
															label='Email'
														/>
													</Col>
													<Col xs={4} className={styles.formRight}>
														<Button
															className={`${rajdhani.className} ${styles.grayButton}`}
														>
															Continue
														</Button>
													</Col>
													<Col xs={12} className='my-3'>
														<Form.Check
															type='checkbox'
															id='newsletter'
															label='Subscribe to our newsletter.'
															className='newsLetterCheckbox'
														/>
													</Col>
													<Col xs={12}>
														<p>
															Already have an account?{' '}
															<Button
																className={styles.signInButton}
																onClick={() => setCustomerFormIndex(1)}
															>
																Sign in now
															</Button>
														</p>
													</Col>
												</Row>
											</Form>

											<Form
												className={`${styles.secondForm} ${
													customerFormIndex === 1 && styles.active
												}`}
											>
												<Row>
													<Col xs={12} className='mb-3'>
														<InputField
															variant='email'
															controlId='email'
															label='Email'
														/>
													</Col>
													<Col xs={12}>
														<InputField
															variant='password'
															controlId='password'
															label='Password'
														/>
													</Col>
													<Col
														xs={12}
														className='my-3 d-flex align-items-center justify-content-between'
													>
														<Link
															href='/reset-password'
															className={styles.forgotPasswordLink}
														>
															Forgot password?
														</Link>
														<Button
															className={styles.createAccountButton}
															onClick={() => setCustomerFormIndex(2)}
														>
															Create an account
														</Button>
													</Col>
													<Col xs={6} className={styles.buttons}>
														<Button
															className={`${rajdhani.className} ${styles.grayButton}`}
														>
															Sign in
														</Button>

														<Button
															className={`${rajdhani.className} ${styles.whiteButton}`}
															onClick={() => setCustomerFormIndex(0)}
														>
															Cancel
														</Button>
													</Col>
												</Row>
											</Form>

											<Form
												className={`${styles.thirdForm} ${
													customerFormIndex === 2 && styles.active
												}`}
											>
												<Row>
													<Col xs={6}>
														<InputField
															variant='text'
															controlId='fname'
															label='First Name'
														/>
													</Col>
													<Col xs={6}>
														<InputField
															variant='text'
															controlId='lname'
															label='Last Name'
														/>
													</Col>

													<Col xs={12} className='my-3'>
														<InputField
															variant='email'
															controlId='email'
															label='Email Address'
														/>
													</Col>
													<Col xs={12} className='mb-3'>
														<InputField
															variant='password'
															controlId='password'
															label='Password'
														/>
													</Col>

													<Col xs={6} className={styles.buttons}>
														<Button
															className={`${rajdhani.className} ${styles.grayButton}`}
														>
															Create account
														</Button>

														<Button
															className={`${rajdhani.className} ${styles.whiteButton}`}
															onClick={() => setCustomerFormIndex(1)}
														>
															Cancel
														</Button>
													</Col>
												</Row>
											</Form>
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</Col>
							<Col xs={5} className={styles.right}></Col>
						</Row>
					</Container>
				</section>
			</main>
		</Layout>
	)
}
export default checkout
