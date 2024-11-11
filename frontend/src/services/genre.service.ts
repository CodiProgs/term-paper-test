import { SERVER_URL } from '@/config/api.config'
import { IGenreDto } from '@/types/genre.type'
import axios from 'axios'

class GenreService {
	private url = SERVER_URL + '/genre'

	async getById(id: string) {
		const response = await axios.get(`${this.url}/${id}`)
		return response.data
	}

	async getAll() {
		const response = await axios.get(this.url)
		return response.data
	}

	async create(genre: IGenreDto) {
		const response = await axios.post(this.url, genre)
		return response.data
	}

	async update(id: string, genre: IGenreDto) {
		const response = await axios.patch(`${this.url}/${id}`, genre)
		return response.data
	}

	async delete(id: string) {
		const response = await axios.delete(`${this.url}/${id}`)
		return response.data
	}
}

export const genreService = new GenreService()
