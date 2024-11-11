'use client'

import { pages } from '@/config/pages.config'
import { actorService } from '@/services/actor.service'
import { format } from 'date-fns'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Actors() {
	const [actors, setActors] = useState<any[]>([])

	useEffect(() => {
		actorService.getAll().then(actors => setActors(actors))
	}, [])

	const handleDelete = (id: string) => {
		actorService.delete(id).then(() => {
			setActors(actors.filter(actor => actor.id !== id))
		})
	}

	return (
		<div>
			<h1 className='text-2xl font-bold'>Актеры</h1>
			{actors.length !== 0 ? (
				<ul className={`mt-4 gap-4 grid grid-cols-3`}>
					{actors.map(actor => (
						<li
							className={` bg-[#1C1C1C] p-4 rounded-md shadow-md`}
							key={actor.id}
						>
							<h2 className='text-xl font-bold'>{actor.fullName}</h2>
							<div className='flex items-center gap-2'>
								<p>Дата рождения:</p>
								<p>{format(new Date(actor.birthday), 'd MMMM yyyy')}</p>
							</div>
							<div className='flex items-center gap-2'>
								<p>Рост:</p>
								<p>{actor.height} см.</p>
							</div>
							<div className='flex items-center justify-between mt-2'>
								<Link
									className='bg-blue-500 text-white px-2 py-1 rounded-md text-sm'
									href={pages.actorEdit(actor.id)}
								>
									Редактировать
								</Link>
								<button
									className='bg-red-500 text-white px-2 py-1 rounded-md text-sm'
									onClick={() => handleDelete(actor.id)}
								>
									Удалить
								</button>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p>Актеров пока нет</p>
			)}
		</div>
	)
}
