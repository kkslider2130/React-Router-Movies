import React, { useState } from "react";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";
import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route
        exact
        path="/"
        render={props => {
          const { id } = props.match.params;
          return <MovieList {...props} id={id} />;
        }}
      />
      <Route
        exact
        path="/movies/:id"
        render={props => {
          const { id } = props.match.params;
          return <Movie {...props} addToSavedList={addToSavedList} id={id} />;
        }}
      ></Route>
    </div>
  );
};

export default App;
