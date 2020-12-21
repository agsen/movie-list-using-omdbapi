import { all } from 'redux-saga/effects'
import movieSaga from './MovieSaga'

export default function* rootSaga() {
    yield all([
        movieSaga(),
    ])
}