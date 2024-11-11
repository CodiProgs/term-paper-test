import type { Metadata } from 'next'
import { Genres } from './Genres'

export const metadata: Metadata = {
	title: 'Жанры',
}

export default function Page() {
	return <Genres />
}
