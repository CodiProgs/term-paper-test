import { SERVER_URL } from '@/config/api.config'
import { IMovieDto } from '@/types/movie.type'
import axios from 'axios'

class MovieService {
	private url = SERVER_URL + '/movie'

	async getAll() {
		const response = await axios.get(this.url)
		return response.data
	}

	async getById(id: string) {
		const response = await axios.get(`${this.url}/${id}`)
		return response.data
	}

	async create(movie: IMovieDto) {
		const response = await axios.post(this.url, movie)
		return response.data
	}

	async update(id: string, movie: IMovieDto) {
		const response = await axios.patch(`${this.url}/${id}`, movie)
		return response.data
	}

	async delete(id: string) {
		const response = await axios.delete(`${this.url}/${id}`)
		return response.data
	}
}

export const movieService = new MovieService()
