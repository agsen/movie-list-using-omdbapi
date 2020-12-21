import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '@redux/actions/movies';
import Card from '@components/Card'


const Home=() => {
    const [keyword, setKeyword]=useState('');
    const [page, setPage]=useState(1);
    const [allMovies, setAllMovies]=useState([])
    const [isScroll, setIsScroll]=useState(false)

    const onScroll=() => {
        if (window.innerHeight+document.documentElement.scrollTop==document.documentElement.offsetHeight) {
            if (page*10<total) {
                loadMovieList();
                setPage(page+1)
            }
        }

        //
        if (document.documentElement.scrollTop>window.screen.height) {
            setIsScroll(true);
        } else {
            setIsScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);





    const dispatch=useDispatch();
    const movies=useSelector(state => state.movies.movies)
    const isLoading=useSelector(state => state.movies.loading)
    const total=useSelector(state => state.movies.total)


    useEffect(() => [
        movies&&setAllMovies([...allMovies, ...movies])
    ], [movies])

    useEffect(() => {
        if (!keyword) { return }
        const delayDebounceFn=setTimeout(() => {
            setAllMovies([])
            loadMovieList()
        }, 500)

        return () => clearTimeout(delayDebounceFn)
    }, [keyword])

    const onChangeSearch=(e) => {
        setKeyword(e.target.value)
    }


    const loadMovieList=() => {
        dispatch(getMovieList({ page: page, keyword: keyword }))
    }

    const scrollToTop=() => {
        document.documentElement.scrollTop=0;
    }


    return (
        <div className="container mx-auto p-2">
            <h2 className="font-bold text-gray-900 text-5xl mb-2 p-3 text-center">Movie List</h2>
            <div className="flex justify-center">
                <input className="text-xl mx-3 p-3 shadow-sm bg-gray-50 rounded border border-gray-300 w-full md:w-3/12 focus:barder-indigo-600" placeholder="Type movie name " value={keyword} onChange={onChangeSearch}></input>
            </div>

            <div className="flex flex-wrap mt-3 justify-center">
                {allMovies&&allMovies
                    .map((movie, index) => {
                        return (
                            <Card item={movie} key={index}></Card>
                        )
                    })
                }
            </div>

            {isLoading&&<div className="text-indigo-600 text-2xl text-center font-bold">Loading ... </div>}

            {allMovies.length==0&&
                <div>
                    <div className="text-gray-400 text-2xl text-center font-bold mt-20">No Record</div>
                    <p className="text-gray-400 text-center">Search movie now !</p>
                </div>}


            {isScroll&&
                <div className="fixed bottom-3 left-0 right-0 flex justify-center ">
                    <div onClick={scrollToTop} className="cursor-pointer rounded-xl py-1 px-3 text-indigo-600 z-10 bg-white shadow-2xl font-bold">Back Top</div>
                </div>
            }

        </div>


    )
}

export default Home;