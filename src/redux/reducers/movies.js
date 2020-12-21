import * as type from '../types'

const initialState={
    movies: [],
    loading: false,
    message: null,
    item: null,
    total: 0
}

export default function movies(state=initialState, action) {
    switch (action.type) {
        case type.GET_MOVIE_LIST_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }

        case type.GET_MOVIE_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                movies: action.movies,
                total: action.total
            }
        }

        case type.GET_MOVIE_LIST_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.message
            }
        }

        case type.GET_MOVIE_DETAIL_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }

        case type.GET_MOVIE_DETAIL_SUCCESS: {
            return {
                ...state,
                loading: false,
                item: action.movie,
            }
        }

        case type.GET_MOVIE_DETAIL_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.message
            }
        }


        default:
            return state
    }
}
