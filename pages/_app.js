import '@/styles/globals.scss'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SSRProvider } from 'react-bootstrap'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.bundle.min.js')
	}, [])
	return (
		<SSRProvider>
			<div>
				<Component {...pageProps} />
			</div>
		</SSRProvider>
	)
}
