'use client'

import { Field } from '@/components/ui/form-elements/field/Field'
import { actorService } from '@/services/actor.service'
import { IActorDto } from '@/types/actor.type'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface EditActor {
	id: string
}

export function EditActor({ id }: EditActor) {
	const {
		register,
		reset,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IActorDto>({
		mode: 'onChange',
	})

	useEffect(() => {
		const fetchActorData = async () => {
			try {
				const fetchedActor = await actorService.getById(id)
				const formattedBirthday = new Date(fetchedActor.birthday)
					.toISOString()
					.split('T')[0]
				setValue('birthday', formattedBirthday)
				setValue('fullName', fetchedActor.fullName)
				setValue('height', fetchedActor.height)
			} catch (error) {
				console.error('Error fetching actor:', error)
			}
		}

		fetchActorData()
	}, [id])

	const onSubmit: SubmitHandler<IActorDto> = data => {
		actorService
			.update(id, data)
			.then(() => {
				toast.success('Актер успешно обновлен')
			})
			.catch(() => {
				toast.error('Ошибка при обновлении актера')
			})
	}

	return (
		<div className='w-1/2 mx-auto'>
			<h1 className='text-2xl font-bold text-center'>Редактирование актера</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					label='ФИО'
					{...register('fullName', { required: 'Это поле обязательно' })}
					error={errors.fullName?.message}
				/>
				<Field
					type='date'
					label='Дата рождения'
					{...register('birthday', {
						required: 'Это поле обязательно',
						valueAsDate: true,
						validate: {
							isDate: value =>
								new Date(value).toString() !== 'Invalid Date' ||
								'Неверная дата',
						},
					})}
					error={errors.birthday?.message}
				/>
				<Field
					label='Рост'
					{...register('height', {
						required: 'Это поле обязательно',
						valueAsNumber: true,
						validate: {
							isNumber: value => !isNaN(value) || 'Значение должно быть числом',
						},
					})}
					error={errors.height?.message}
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
