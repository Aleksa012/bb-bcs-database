import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import classes from "./Characters.module.css";

import Loading from "./Util/Loading";
import Card from "./Card";
import FilterForm from "./Util/FilterForm";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const favorites = useSelector((store) => store.favorites);

  useEffect(() => {
    const getChars = async function (filter) {
      const data = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${filter}`
      ).then((res) => res.json());
      console.log(favorites);

      setCharacters(data);
      setIsLoaded(true);
    };
    getChars(filter);
  }, [isLoaded, filter]);

  const getFilter = function (input) {
    setFilter(input);
  };

  return (
    <Fragment>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <div className={classes["chars-page"]}>
          <FilterForm
            chars={characters}
            setChars={setCharacters}
            toFilter={getFilter}
          />
          {characters.length !== 0 ? (
            characters.map((char) => (
              <Card key={char.char_id} character={char} />
            ))
          ) : (
            <EmptySearch />
          )}
        </div>
      )}
    </Fragment>
  );
}

export default Characters;

const EmptySearch = function () {
  return <span className={classes.empty}>No results found!</span>;
};
