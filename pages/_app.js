import '@/styles/globals.scss'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-tooltip/dist/react-tooltip.css'
import { SSRProvider } from 'react-bootstrap'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.bundle.min.js')
	}, [])
	return (
		<SSRProvider>
			<NextNProgress />
			<div>
				<Component {...pageProps} />
			</div>
		</SSRProvider>
	)
}
