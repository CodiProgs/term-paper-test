import { Actors } from './actors/Actors'
import { Genres } from './genres/Genres'
import { Movies } from './movies/Movies'

export default function Home() {
	return (
		<div>
			<h1 className='text-2xl font-bold'>Главная</h1>
			<div className='flex'>
				<div className='w-1/4 border-r border-[#1C1C1C] py-4 pr-4'>
					<Genres column={true} />
				</div>
				<div className='w-3/4 p-4 space-y-5'>
					<Movies />
					<Actors />
				</div>
			</div>
		</div>
	)
}

