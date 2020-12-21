import React from 'react';
import { useHistory } from "react-router-dom";


const Card=(item) => {

    const history=useHistory();
    const onView=(imdbID) => {
        history.push(`/detail/${imdbID}`);
    }


    return (
        <div className="cursor-pointer w-full md:w-3/12 p-3 m-2 rounded shadow-xl hover:bg-gray-400" onClick={() => { onView(item?.item.imdbID) }}>
            <img className="rounded w-full h-450" src={item?.item.Poster}></img>
            <h2 className="font-bold text-xl mt-2">{item?.item.Title}</h2>
            <p className="text-gray-700">{item?.item.Year}</p>

        </div>


    )
}

export default Card;