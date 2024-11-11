import type { Metadata } from 'next'
import { Actors } from './Actors'

export const metadata: Metadata = {
	title: 'Актеры',
}

export default function Page() {
	return <Actors />
}
