import { SERVER_URL } from '@/config/api.config'
import { IActorDto } from '@/types/actor.type'
import axios from 'axios'

class ActorService {
	private url = SERVER_URL + '/actor'

	async getAll() {
		const response = await axios.get(this.url)
		return response.data
	}

	async getById(id: string) {
		const response = await axios.get(`${this.url}/${id}`)
		return response.data
	}

	async create(actor: IActorDto) {
		const response = await axios.post(this.url, actor)
		return response.data
	}

	async update(id: string, actor: IActorDto) {
		const response = await axios.patch(`${this.url}/${id}`, actor)
		return response.data
	}

	async delete(id: string) {
		const response = await axios.delete(`${this.url}/${id}`)
		return response.data
	}
}

export const actorService = new ActorService()
