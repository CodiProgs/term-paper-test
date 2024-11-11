import type { Metadata } from 'next'
import { EditActor } from './EditActor'

export const metadata: Metadata = {
	title: 'Обновление актера',
}

export default async function EditActorPage({
	params,
}: {
	params: { id: string }
}) {
	const { id } = await params
	return <EditActor id={id} />
}
