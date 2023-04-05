import InputField from '@/components/InputField'
import Layout from '@/components/Layout'
import styles from '@/styles/pages/Cart.module.scss'
import data from '@/utils/data'
import { Arimo, Rajdhani } from 'next/font/google'
import Image from 'next/image'
import { Button, Container, Table } from 'react-bootstrap'
import { MdClose } from 'react-icons/md'

const { products } = data

const product = products[0]

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
					<h2 className={rajdhani.className}>Your Cart (1 Item)</h2>

					<Table className={`${styles.table} ${arimo.className}`}>
						<thead>
							<tr>
								<th>Item</th>
								<th className='text-center'>Price</th>
								<th className='text-center'>Quantity</th>
								<th className='text-center'>Total</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
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
									<span className={styles.subtotal}>GH₵{product.price}</span>
								</td>
								<td className='text-center'>
									<span className={styles.deleteButton}>
										<MdClose />
									</span>
								</td>
							</tr>
						</tbody>
					</Table>
				</Container>
			</main>
		</Layout>
	)
}
export default cart
