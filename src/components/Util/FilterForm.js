import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

import classes from "./FilterForm.module.css";

function FilterForm({ chars, toFilter, setChars }) {
  const [category, setCategory] = useState("");

  const favorites = useSelector((store) => store.favorites);

  useEffect(() => {
    const getCharactersByCategory = async function (category) {
      const data = await fetch(
        `https://www.breakingbadapi.com/api/characters?category=${category}`
      ).then((res) => res.json());

      setChars(data);
    };

    getCharactersByCategory(category);
  }, [category, setChars]);

  const filterChar = (e) => {
    e.preventDefault();

    toFilter(e.target.value.trim().toLowerCase());
  };

  const filterByCategory = (e) => {
    e.preventDefault();

    setCategory(e.target.textContent);
  };

  return (
    <form className={classes["filter-form"]}>
      <div className={classes["filter-input__wrapper"]}>
        <input
          type="text"
          placeholder="Search character..."
          className={classes["filter-input"]}
          onChange={filterChar}
        />
        <button
          onClick={(e) => e.preventDefault()}
          className={classes["filter-btn"]}
        >
          <FaSearch className={classes["filter-btn__icon"]} />
        </button>
      </div>
      <button onClick={filterByCategory}>Breaking Bad</button>
      <button onClick={filterByCategory}>Better Call Saul</button>
      <button
        onClick={(e) => {
          e.preventDefault();

          setChars(
            chars.filter((char) => {
              return favorites.includes(char.char_id);
            })
          );
        }}
      >
        Favorites
      </button>
    </form>
  );
}

export default FilterForm;
