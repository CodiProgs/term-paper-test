'use client'

import { Field } from '@/components/ui/form-elements/field/Field'
import { genreService } from '@/services/genre.service'
import { IGenreDto } from '@/types/genre.type'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export function CreateGenre() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<IGenreDto>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IGenreDto> = data => {
		genreService
			.create(data)
			.then(() => {
				reset()
				toast.success('Жанр успешно создан')
			})
			.catch(() => {
				toast.error('Ошибка при создании жанра')
			})
	}

	return (
		<div className='w-1/2 mx-auto'>
			<h1 className='text-2xl font-bold text-center'>Создание жанра</h1>
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
					Создать
				</button>
			</form>
		</div>
	)
}
