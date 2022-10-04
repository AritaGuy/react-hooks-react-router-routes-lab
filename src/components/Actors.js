import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((movy)=> (
    <div key={movy.name}>
    {movy.name}
    
    <ul>
      {movy.movies.map((name)=><li key={name}>{name}</li>)}
    </ul>
    </div>))}
  </div>;
}

export default Actors;
