import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((movy)=> (
    <div key={movy.name}>
    {movy.name}
    <ul>
      {movy.movies.map((movie)=><li key={movie}>{movie}</li>)}
    </ul>
    </div>))}
  </div>;
}

export default Directors;
