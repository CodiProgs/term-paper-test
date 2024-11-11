import { pages } from '@/config/pages.config'
import Link from 'next/link'

export function Header() {
	return (
		<div className='bg-[#1C1C1C] text-white '>
			<div className='mx-auto max-w-7xl flex items-center gap-10 py-4'>
				<Link href={pages.home}>Главная</Link>
				<details className='relative'>
					<summary className='m-1 cursor-pointer'>Актеры</summary>
					<ul className='absolute bg-gray-700 text-white py-2 w-40 rounded-md shadow-md'>
						<li>
							<Link
								className='block px-4 py-2 hover:bg-gray-600'
								href={pages.actors}
							>
								Все актеры
							</Link>
						</li>
						<li>
							<Link
								className='block px-4 py-2 hover:bg-gray-600'
								href={pages.actorCreate}
							>
								Добавить актера
							</Link>
						</li>
					</ul>
				</details>
				<details className='relative'>
					<summary className='m-1 cursor-pointer'>Фильмы</summary>
					<ul className='absolute bg-gray-700 text-white py-2 w-40 rounded-md shadow-md'>
						<li>
							<Link
								className='block px-4 py-2 hover:bg-gray-600'
								href={pages.movies}
							>
								Все фильмы
							</Link>
						</li>
						<li>
							<Link
								className='block px-4 py-2 hover:bg-gray-600'
								href={pages.movieCreate}
							>
								Добавить фильм
							</Link>
						</li>
					</ul>
				</details>
				<details className='relative'>
					<summary className='m-1 cursor-pointer'>Жанры</summary>
					<ul className='absolute bg-gray-700 text-white py-2 w-40 rounded-md shadow-md'>
						<li>
							<Link
								className='block px-4 py-2 hover:bg-gray-600'
								href={pages.genres}
							>
								Все жанры
							</Link>
						</li>
						<li>
							<Link
								className='block px-4 py-2 hover:bg-gray-600'
								href={pages.genreCreate}
							>
								Добавить жанр
							</Link>
						</li>
					</ul>
				</details>
			</div>
		</div>
	)
}
