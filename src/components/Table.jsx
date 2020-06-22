import React, { useState, useEffect, useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table() {
  const { getPlanets, updateData, updateError } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets("https://swapi-trybe.herokuapp.com/api/planets/")
      .then((res) => {
        updateData(res.results);
      })
      .catch((err) => {
        updateError(err);
      });
  }, []);

  return (
    <div>
      <table className="striped highlight centered responsive-table">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
