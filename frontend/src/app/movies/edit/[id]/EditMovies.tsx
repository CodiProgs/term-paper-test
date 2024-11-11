'use client'

import { Field } from '@/components/ui/form-elements/field/Field'
import { actorService } from '@/services/actor.service'
import { genreService } from '@/services/genre.service'
import { movieService } from '@/services/movie.service'
import { IMovieDto } from '@/types/movie.type'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface EditMovie {
	id: string
}

export function EditMovie({ id }: EditMovie) {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IMovieDto>({
		mode: 'onChange',
	})

	const [genres, setGenres] = useState<any[]>([])
	const [actors, setActors] = useState<any[]>([])

	useEffect(() => {
		const fetchMovieData = async () => {
			try {
				setGenres(await genreService.getAll())
				setActors(await actorService.getAll())

				const fetchedMovie = await movieService.getById(id)

				const formattedRelease = new Date(fetchedMovie.release)
					.toISOString()
					.split('T')[0]
				setValue('release', formattedRelease)

				setValue('duration', fetchedMovie.duration)
				setValue('rating', fetchedMovie.rating)
				setValue('title', fetchedMovie.title)
				setValue(
					'genreIds',
					fetchedMovie.genres.map((genre: any) => genre.id)
				)
				setValue(
					'actorIds',
					fetchedMovie.actors.map((actor: any) => actor.id)
				)
			} catch (error) {
				console.error('Error fetching movie:', error)
			}
		}

		fetchMovieData()
	}, [id])

	const onSubmit: SubmitHandler<IMovieDto> = data => {
		movieService
			.update(id, data)
			.then(() => {
				toast.success('Фильм успешно обновлен')
			})
			.catch(() => {
				toast.error('Ошибка при обновлении фильма')
			})
	}

	return (
		<div className='w-1/2 mx-auto'>
			<h1 className='text-2xl font-bold text-center'>Редактирование фильма</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					label='Название'
					{...register('title', { required: 'Это поле обязательно' })}
					error={errors.title?.message}
				/>
				<Field
					type='date'
					label='Дата выхода'
					{...register('release', {
						required: 'Это поле обязательно',
						valueAsDate: true,
						validate: {
							isDate: value =>
								new Date(value).toString() !== 'Invalid Date' ||
								'Неверная дата',
						},
					})}
					error={errors.release?.message}
				/>
				<Field
					label='Рейтинг'
					{...register('rating', {
						required: 'Это поле обязательно',
						valueAsNumber: true,
						min: { value: 0, message: 'Рейтинг не может быть меньше 0' },
						max: { value: 10, message: 'Рейтинг не может быть больше 10' },
						validate: {
							isNumber: value => !isNaN(value) || 'Значение должно быть числом',
						},
					})}
					error={errors.rating?.message}
				/>
				<Field
					label='Длительность'
					{...register('duration', {
						required: 'Это поле обязательно',
						valueAsNumber: true,
						min: { value: 0, message: 'Длительность не может быть меньше 0' },
						validate: {
							isNumber: value => !isNaN(value) || 'Значение должно быть числом',
						},
					})}
					error={errors.duration?.message}
				/>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2'>
						Жанры
					</label>
					<select
						{...register('genreIds', { required: 'Это поле обязательно' })}
						multiple
						className='block w-full mt-1 shadow-sm border focus:border-indigo-300 outline-none border-[#1C1C1C] rounded bg-[#0d0d0d]'
					>
						{genres.map(genre => (
							<option key={genre.id} value={genre.id}>
								{genre.name}
							</option>
						))}
					</select>
					{errors.genreIds && (
						<p className='text-red-500 text-xs italic'>
							{errors.genreIds.message}
						</p>
					)}
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2'>
						Актеры
					</label>
					<select
						{...register('actorIds', { required: 'Это поле обязательно' })}
						multiple
						className='block w-full mt-1 shadow-sm border focus:border-indigo-300 outline-none border-[#1C1C1C] rounded bg-[#0d0d0d]'
					>
						{actors.map(actor => (
							<option key={actor.id} value={actor.id}>
								{actor.fullName}
							</option>
						))}
					</select>
					{errors.actorIds && (
						<p className='text-red-500 text-xs italic'>
							{errors.actorIds.message}
						</p>
					)}
				</div>
				<button
					type='submit'
					className='px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700'
				>
					Сохранить
				</button>
			</form>
		</div>
	)
}
