import styles from '@/styles/components/BlogCard.module.scss'
import { Arimo } from 'next/font/google'
import Image from 'next/image'

const arimo = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const BlogCard = ({ blog }) => {
	return (
		<div className={`${styles.mainWrapper} ${arimo.className}`}>
			<div className={styles.imageWrapper}>
				<Image src={blog.image} fill />
			</div>
			<div className={styles.body}>
				<h5 className={styles.title}>{blog.title}</h5>
				<span className={styles.blogInfo}>
					Posted by Hubert on 24th March 2023
				</span>
				<p className={styles.blogText}>{blog.body}</p>
			</div>
		</div>
	)
}
export default BlogCard
