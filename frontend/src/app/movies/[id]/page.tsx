import type { Metadata } from 'next'
import { Movie } from './Movie'

export const metadata: Metadata = {
	title: 'Фильм',
}

export default async function MoviePage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	return <Movie id={id} />
}
