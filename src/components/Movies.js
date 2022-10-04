import React from "react";
import  {movies}  from "../data";

function Movies() {
  const h = {movies}
  console.log (h)
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map((movy)=> (
    <div key={movy.title}>
    {movy.title}
    {movy.time}
    <ul>
      {movy.genres.map((genre)=><li key={genre}>{genre}</li>)}
    </ul>
    </div>))}
  </div>
  )
}

export default Movies;
