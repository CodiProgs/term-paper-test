import type { Metadata } from 'next'
import { CreateActor } from './CreateActor'

export const metadata: Metadata = {
	title: 'Создание актера',
}

export default function Page() {
	return <CreateActor />
}
