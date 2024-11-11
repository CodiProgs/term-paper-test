'use client'

import { pages } from '@/config/pages.config'
import { movieService } from '@/services/movie.service'
import { format } from 'date-fns'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Movies() {
	const [movies, setMovies] = useState<any[]>([])

	useEffect(() => {
		movieService.getAll().then(movies => setMovies(movies))
	}, [])

	const handleDelete = (id: string) => {
		movieService.delete(id).then(() => {
			setMovies(movies.filter(movie => movie.id !== id))
		})
	}

	return (
		<div>
			<h1 className='text-2xl font-bold'>Фильмы</h1>
			{movies.length !== 0 ? (
				<ul className='grid gap-3 mt-4 grid-cols-2'>
					{movies.map(movie => (
						<li
							className='text-lg bg-[#1C1C1C] p-4 rounded-md shadow-md'
							key={movie.id}
						>
							<Link href={pages.movie(movie.id)}>
								<h2 className='text-xl font-bold'>{movie.title}</h2>
							</Link>
							<div>
								<p>
									Год выпуска: {format(new Date(movie.release), 'd MMMM yyyy')}
								</p>
								<p>Продолжительность: {movie.duration} минут</p>
							</div>
							<div className='flex items-center gap-2'>
								<p>Рейтинг:</p>
								<p>{movie.rating}</p>
							</div>
							<div className='flex items-center justify-between mt-2'>
								<Link
									className='bg-blue-500 text-white px-2 py-1 rounded-md text-sm'
									href={pages.movieEdit(movie.id)}
								>
									Редактировать
								</Link>
								<button
									className='bg-red-500 text-white px-2 py-1 rounded-md text-sm'
									onClick={() => handleDelete(movie.id)}
								>
									Удалить
								</button>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p>Фильмов пока нет</p>
			)}
		</div>
	)
}
