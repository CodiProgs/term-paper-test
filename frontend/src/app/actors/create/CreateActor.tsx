'use client'

import { Field } from '@/components/ui/form-elements/field/Field'
import { actorService } from '@/services/actor.service'
import { IActorDto } from '@/types/actor.type'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export function CreateActor() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<IActorDto>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IActorDto> = data => {
		actorService
			.create(data)
			.then(() => {
				reset()
				toast.success('Актер успешно создан')
			})
			.catch(() => {
				toast.error('Ошибка при создании актера')
			})
	}

	return (
		<div className='w-1/2 mx-auto'>
			<h1 className='text-2xl font-bold text-center'>Создание актера</h1>
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
					Создать
				</button>
			</form>
		</div>
	)
}
