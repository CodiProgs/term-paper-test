class PageConfig {
	home = '/'

	actors = '/actors'
	actor = (id: string) => `/actors/${id}`
	actorCreate = '/actors/create'
	actorEdit = (id: string) => `/actors/edit/${id}`

	genres = '/genres'
	genreCreate = '/genres/create'
	genreEdit = (id: string) => `/genres/edit/${id}`

	movies = '/movies'
	movie = (id: string) => `/movies/${id}`
	movieCreate = '/movies/create'
	movieEdit = (id: string) => `/movies/edit/${id}`
}

export const pages = new PageConfig()
