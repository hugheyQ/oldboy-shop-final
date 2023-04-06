import CartPageItem from '@/components/CartPageItem'
import DeleteButton from '@/components/DeleteButton'
import InputField from '@/components/InputField'
import Layout from '@/components/Layout'
import styles from '@/styles/pages/Cart.module.scss'
import data from '@/utils/data'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { MdOutlineSecurity } from 'react-icons/md'

const { products } = data

const cartItems = products.filter(product => product.id < 3)

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const cart = () => {
	return (
		<Layout title='Cart'>
			<main className={styles.mainWrapper}>
				<Container>
					<h2 className={rajdhani.className}>
						Your Cart ({cartItems.length} Item{cartItems.length > 1 && 's'})
					</h2>

					<Row>
						<Col xs={12} xl={9} className={styles.left}>
							<Table
								className={`${styles.table} ${arimo.className} d-none d-lg-block`}
							>
								<thead>
									<tr>
										<th width='52%'>Item</th>
										<th width='16%' className='text-center'>
											Price
										</th>
										<th width='16%' className='text-center'>
											Quantity
										</th>
										<th width='16%' className='text-center'>
											Total
										</th>
									</tr>
								</thead>
								<tbody>
									{cartItems.map(product => (
										<tr key={product.id}>
											<td>
												<div className={styles.productCard}>
													<div className={styles.imageWrapper}>
														<Image src={product.image} alt={product.title} fill />
													</div>

													<div className={styles.productDetails}>
														<span className={styles.brand}>{product.brand}</span>

														<span className={styles.title}>{product.title}</span>
													</div>
												</div>
											</td>
											<td className='text-center'>
												<span className={styles.price}>GH₵{product.price}</span>
											</td>
											<td>
												<div className='mx-auto' style={{ width: 'max-content' }}>
													<InputField variant='number' />
												</div>
											</td>
											<td className='text-center'>
												<span className={styles.subtotal}>
													GH₵{product.price}
												</span>
												<DeleteButton />
											</td>
										</tr>
									))}
								</tbody>
							</Table>

							<div className={`${styles.mobileCartDisplay} d-lg-none`}>
								{cartItems.map(product => (
									<CartPageItem key={product.id} product={product} />
								))}
							</div>

							<div className={styles.buttons}>
								<Button
									className={`${styles.cartLink} ${rajdhani.className}`}
								>
									Clear shopping cart
								</Button>
								<Link
									className={`${styles.cartLink} ${rajdhani.className}`}
									href='/'
								>
									Continue shopping
								</Link>
							</div>
						</Col>
						<Col
							xs={12}
							xl={3}
							className={`${styles.right} ${arimo.className} position-relative`}
						>
							<div className={styles.orderSummaryWrapper}>
								<span className={`${styles.title} ${rajdhani.className}`}>
									Order Summary:
								</span>

								<div className={styles.subTotal}>
									<span className={styles.label}>Subtotal:</span>
									<span className={styles.amount}>GH₵200</span>
								</div>

								<div className={styles.grandTotal}>
									<span className={styles.label}>Grand total:</span>
									<span className={styles.amount}>GH₵200</span>
								</div>

								<Link
									href='/checkout'
									className={`${styles.checkoutLink} ${rajdhani.className}`}
								>
									Checkout
								</Link>

								<div className={styles.orderSecurity}>
									<MdOutlineSecurity />
									<p>
										Secure Shopping Guarantee. <br /> Your information is
										secure.
									</p>
								</div>

								<p className={styles.needHelp}>
									Need Help? Contact us or Get in touch{' '}
									<Link href='tel:0203823722'>0203823722</Link>
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</main>
		</Layout>
	)
}
export default cart
