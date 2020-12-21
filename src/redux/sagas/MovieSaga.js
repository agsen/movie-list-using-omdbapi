import { call, put, takeEvery } from 'redux-saga/effects';
import { getByKeyword, getMovieDetail } from '@api/service';
import * as type from '../types';


function* getMovieRequest(action) {
    const { keyword, page }=action.payload

    try {
        const movies=yield call(getByKeyword, keyword, page);
        const data=movies.data.Search
        const length=movies.data.totalResults
        yield put({ type: type.GET_MOVIE_LIST_SUCCESS, movies: data, total: length })
    } catch (e) {
        yield put({ type: type.GET_MOVIE_LIST_FAILED, message: e.message })
    }
}

function* getMovieDetailRequest(action) {
    const id=action.payload

    try {
        const movies=yield call(getMovieDetail, id);
        const data=movies.data
        yield put({ type: type.GET_MOVIE_DETAIL_SUCCESS, movie: data })
    } catch (e) {
        yield put({ type: type.GET_MOVIE_DETAIL_FAILED, message: e.message })
    }
}

function* movieSaga() {
    yield takeEvery(type.GET_MOVIE_LIST_REQUEST, getMovieRequest)
    yield takeEvery(type.GET_MOVIE_DETAIL_REQUEST, getMovieDetailRequest)
}

export default movieSaga;