import React, { useEffect, useState } from 'react';
import { getMovieDetail } from '@redux/actions/movies';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";


const DetailMovie=() => {
    const [isImageClicked, setImageClicked]=useState(false)
    let { imdbID }=useParams();
    const dispatch=useDispatch();

    const movie=useSelector(state => state.movies.item)
    const isLoading=useSelector(state => state.movies.loading)


    useEffect(() => {
        dispatch(getMovieDetail(imdbID))
    }, [])

    const history=useHistory();
    const goBack=() => {
        history.goBack()
    }

    return (
        <>
            <div className="container mx-auto p-2">
                {movie&&
                    <div className="flex flex-wrap justify-center">
                        <div className=" md:w-3/12 p-3">
                            <img onClick={() => { setImageClicked(true) }} className="cursor-pointer rounded w-full h-auto md:mt-3" src={movie?.Poster} alt="poster"></img>
                        </div>
                        <div className=" md:w-6/12 p-3">
                            <h2 className="font-bold text-3xl mt-2">{movie?.Title}</h2>
                            <p className="text-indigo-600">{movie?.Genre}</p>
                            <p className="mt-2 text-gray-500">{movie?.Plot}</p>
                            <div className="border rounded border-gray-100 p-3 mt-4">
                                <div className="flex">
                                    <p className="w-6/12 md:w-2/12 text-gray-500">Rating</p>
                                    <p className="w-6/12 md:w-8/12 font-bold  ">{movie?.imdbRating}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-6/12 md:w-2/12 text-gray-500">Year</p>
                                    <p className="w-6/12 md:w-8/12">{movie?.Year}</p>
                                </div>

                                <div className="flex">
                                    <p className="w-6/12 md:w-2/12 text-gray-500">Released</p>
                                    <p className="w-6/12 md:w-8/12">{movie?.Released}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-6/12 md:w-2/12 text-gray-500">Production</p>
                                    <p className="w-6/12 md:w-8/12">{movie?.Production}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-6/12 md:w-2/12 text-gray-500">Runtime</p>
                                    <p className="w-6/12 md:w-8/12">{movie?.Runtime}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-6/12 md:w-2/12 text-gray-500">Director</p>
                                    <p className="w-6/12 md:w-8/12">{movie?.Director}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-6/12 md:w-2/12 text-gray-500">Writer</p>
                                    <p className="w-6/12 md:w-8/12">{movie?.Writer}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-6/12 md:w-2/12 text-gray-500">Actors</p>
                                    <p className="w-6/12 md:w-8/12">{movie?.Actors}</p>
                                </div>
                            </div>
                            <div className="inline-flex rounded-md shadow mt-3">
                                <a onClick={goBack} class="cursor-pointer inline-flex items-center justify-center px-5 py-3 border border border-indigo-200 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                                    Back</a>
                            </div>
                        </div>


                    </div>
                }

                {isLoading&&<div className="text-indigo-600 text-2xl text-center font-bold">Loading ... </div>}

            </div>

            {isImageClicked&&<div className="fixed inset-0 rounded z-10 bg-black bg-opacity-80 p-2 text-center">
                <img className="inline rounded w-auto h-4/5 mt-6" src={movie?.Poster} alt="poster"></img>
                <div onClick={() => { setImageClicked(false) }} className="cursor-pointer text-gray-200 mt-4 font-bold">Close</div>
            </div>}
        </>
    )
}

export default DetailMovie;