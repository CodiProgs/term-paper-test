'use client'

import { pages } from '@/config/pages.config'
import { movieService } from '@/services/movie.service'
import { format } from 'date-fns'
import Link from 'next/link'
import Router from 'next/router'
import { useEffect, useState } from 'react'

interface Movie {
	id: string
}

export function Movie({ id }: Movie) {
	const [movie, setMovie] = useState<any | null>(null)

	useEffect(() => {
		movieService.getById(id).then(movie => setMovie(movie))
	}, [id])

	const { push } = Router

	const handleDelete = (id: string) => {
		movieService.delete(id).then(() => {
			push(pages.movies)
		})
	}

	return (
		<div>
			{movie ? (
				<>
					<div
						className='text-lg bg-[#1C1C1C] p-4 rounded-md shadow-md'
						key={movie.id}
					>
						<h2 className='text-xl font-bold'>{movie.title}</h2>
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
					</div>
				</>
			) : (
				<p>Фильм не найден</p>
			)}
		</div>
	)
}
