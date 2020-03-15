import { Movie } from './models/movie'

export interface MoviesState {
  readonly loading: boolean
  readonly data: Movie[]
  readonly errors?: string
}