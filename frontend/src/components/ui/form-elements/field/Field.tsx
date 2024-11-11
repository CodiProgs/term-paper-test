import { InputHTMLAttributes, forwardRef } from 'react'

interface IField extends InputHTMLAttributes<HTMLInputElement> {
	error?: string
	label?: string
}

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, label, error, ...rest }, ref) => {
		return (
			<div className='mb-4'>
				<label>
					{label && <span>{label}</span>}
					<input
						ref={ref}
						placeholder={placeholder}
						{...rest}
						className='w-full p-1 border border-[#1C1C1C] rounded bg-[#0d0d0d] outline-none focus:border-indigo-300'
					/>
				</label>
				{error && <p className='text-red-500 text-sm'>{error}</p>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export { Field }
