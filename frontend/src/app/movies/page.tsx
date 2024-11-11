import type { Metadata } from 'next'
import { Movies } from './Movies'

export const metadata: Metadata = {
	title: 'Фильмы',
}

export default function Page() {
	return <Movies />
}
