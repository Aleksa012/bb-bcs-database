import React, { useState, useEffect, Fragment } from "react";

import classes from "./Characters.module.css";

import Loading from "./Util/Loading";
import Card from "./Card";
import FilterForm from "./Util/FilterForm";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getChars = async function () {
      const data = await fetch(
        `https://www.breakingbadapi.com/api/characters`
      ).then((res) => res.json());

      setCharacters(data);
      setIsLoaded(true);
    };

    getChars();
  }, [isLoaded]);

  return (
    <Fragment>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <div className={classes["chars-page"]}>
          <FilterForm />
          {characters.map((char) => (
            <Card
              key={char.char_id}
              name={char.name}
              img={char.img}
              status={char.status}
              birthday={char.birthday}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default Characters;
