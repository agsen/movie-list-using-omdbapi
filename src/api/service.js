import axios from 'axios'

const APIKEY='faf7e5bb'
const instance=axios.create({
    baseURL: `http://www.omdbapi.com`,
    timeout: 1000,
});

export const getByKeyword=(keyword, page) => {
    return instance.get(`?apikey=${APIKEY}&s=${keyword||" "}&page=${page||1}`)
}

export const getMovieDetail=(imdbID) => {
    return instance.get(`?apikey=${APIKEY}&i=${imdbID}`)
}