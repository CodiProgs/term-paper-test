import type { Metadata } from 'next'
import { CreateMovie } from './CreateMovie'

export const metadata: Metadata = {
	title: 'Создание фильма',
}

export default function Page() {
	return <CreateMovie />
}
