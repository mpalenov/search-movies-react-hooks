// fix a false positive error by eslint
// eslint-disable-next-line no-shadow
export enum MoviesActionTypes {
  SEARCH_REQUEST = '@@movies/SEARCH_REQUEST',
  SEARCH_SUCCESS = '@@movies/SEARCH_SUCCESS',
  SEARCH_ERROR = '@@movies/SEARCH_ERROR',
}
