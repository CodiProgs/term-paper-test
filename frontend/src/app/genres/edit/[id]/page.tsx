import type { Metadata } from 'next'
import { EditGenre } from './EditGenre'

export const metadata: Metadata = {
	title: 'Редактирование жанра',
}

export default async function EditGenrePage({
	params,
}: {
	params: { id: string }
}) {
	const { id } = await params
	return <EditGenre id={id} />
}
