'use client'

import { pages } from '@/config/pages.config'
import { genreService } from '@/services/genre.service'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Genres {
	column?: boolean
}

export function Genres({ column = false }: Genres) {
	const [genres, setGenres] = useState<any[]>([])

	useEffect(() => {
		genreService.getAll().then(genres => setGenres(genres))
	}, [])

	const handleDelete = (id: string) => {
		genreService.delete(id).then(() => {
			setGenres(genres.filter(genre => genre.id !== id))
		})
	}

	return (
		<div>
			<h1 className='text-2xl font-bold'>Жанры</h1>
			{genres.length !== 0 ? (
				<ul
					className={`mt-4 gap-4 ${
						column ? 'flex flex-col' : 'grid grid-cols-4'
					}`}
				>
					{genres.map(genre => (
						<li
							className={` bg-[#1C1C1C] p-4 rounded-md shadow-md ${
								column ? 'text-sm' : 'text-lg'
							}`}
							key={genre.id}
						>
							<h2 className='text-xl font-bold'>{genre.name}</h2>
							<div className='flex items-center justify-between mt-2'>
								<Link
									className='bg-blue-500 text-white px-2 py-1 rounded-md text-sm'
									href={pages.genreEdit(genre.id)}
								>
									Редактировать
								</Link>
								<button
									className='bg-red-500 text-white px-2 py-1 rounded-md text-sm'
									onClick={() => handleDelete(genre.id)}
								>
									Удалить
								</button>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p>Жанров пока нет</p>
			)}
		</div>
	)
}
