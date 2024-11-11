import type { Metadata } from 'next'
import { CreateGenre } from './CreateGenre'

export const metadata: Metadata = {
	title: 'Создание жанра',
}

export default function Page() {
	return <CreateGenre />
}
