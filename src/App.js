import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { ApplicationRoutes } from "./ApplicationRoutes";

export default function App() {
  return (
    <div className="App">
      <h1>List Popular Movies</h1>
      <ul className="menuPrincipal">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favoritos">Favorites</Link>
        </li>
      </ul>
      <ApplicationRoutes />
    </div>
  );
}
