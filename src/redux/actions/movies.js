import * as type from '../types'

export function getMovieList(param) {
    return {
        type: type.GET_MOVIE_LIST_REQUEST,
        payload: {
            page: param.page,
            keyword: param.keyword
        }
    }
}

export function getMovieDetail(id) {
    return {
        type: type.GET_MOVIE_DETAIL_REQUEST,
        payload: id
    }
}