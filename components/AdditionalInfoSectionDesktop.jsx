import styles from '@/styles/components/AdditionalInfoSectionDesktop.module.scss'
import { Arimo, Rajdhani } from 'next/font/google'
import { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const AdditionalInfoSection = () => {
	const [key, setKey] = useState('description')

	return (
		<div className={styles.wrapper}>
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={k => setKey(k)}
				className={`additional-info-navigation ${rajdhani.className} d-none d-sm-flex`}
			>
				<Tab eventKey='description' title='Description'>
					1
				</Tab>
				<Tab eventKey='shipping' title='Shipping & returns'>
					2
				</Tab>
				<Tab eventKey='resources' title='Resources'>
					3
				</Tab>
				<Tab eventKey='faq' title='FAQ'>
					3
				</Tab>
			</Tabs>
		</div>
	)
}
export default AdditionalInfoSection
