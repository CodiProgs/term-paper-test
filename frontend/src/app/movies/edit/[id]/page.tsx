import type { Metadata } from 'next'
import { EditMovie } from './EditMovies'

export const metadata: Metadata = {
	title: 'Редактирование фильма',
}

export default async function EditMoviePage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	return <EditMovie id={id} />
}
