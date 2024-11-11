'use client'

import { Field } from '@/components/ui/form-elements/field/Field'
import { genreService } from '@/services/genre.service'
import { IGenreDto } from '@/types/genre.type'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface EditGenre {
	id: string
}

export function EditGenre({ id }: EditGenre) {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IGenreDto>({
		mode: 'onChange',
	})

	useEffect(() => {
		const fetchGenreData = async () => {
			try {
				const fetchedGenre = await genreService.getById(id)

				setValue('name', fetchedGenre.name)
			} catch (error) {
				console.error('Error fetching genre:', error)
			}
		}

		fetchGenreData()
	}, [id])

	const onSubmit: SubmitHandler<IGenreDto> = data => {
		genreService
			.update(id, data)
			.then(() => {
				toast.success('Жанр успешно обновлен')
			})
			.catch(() => {
				toast.error('Ошибка при обновлении жанра')
			})
	}

	return (
		<div className='w-1/2 mx-auto'>
			<h1 className='text-2xl font-bold text-center'>Редактирование жанра</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					label='ФИО'
					{...register('name', { required: 'Это поле обязательно' })}
					error={errors.name?.message}
				/>
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
