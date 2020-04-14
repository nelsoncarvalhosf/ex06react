import React from "react";
import { Route } from "react-router-dom";
import { MoviesList } from "./components/MoviesList";
import { Movie } from "./components/Movie";
import { Favoritos } from "./components/Favoritos";


export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={MoviesList} />
    <Route path="/movie/:id" exact component={Movie} />
    <Route path="/favoritos" exact component={Favoritos} />
  </>
);
