import React, { useState, useEffect, Fragment } from "react";

import classes from "./Characters.module.css";

import Loading from "./Util/Loading";
import Card from "./Card";
import FilterForm from "./Util/FilterForm";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getChars = async function (filter) {
      const data = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${filter}`
      ).then((res) => res.json());

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
          <FilterForm setChars={setCharacters} toFilter={getFilter} />
          {characters.length != 0 ? (
            characters.map((char) => (
              <Card
                key={char.char_id}
                name={char.name}
                img={char.img}
                status={char.status}
                birthday={char.birthday}
              />
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
