import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import classes from "./FilterForm.module.css";

function FilterForm(props) {
  const [filteredChar, setFilteredChar] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getCharactersByCategory = async function (category) {
      const data = await fetch(
        `https://www.breakingbadapi.com/api/characters?category=${category}`
      ).then((res) => res.json());

      props.setChars(data);
      console.log(data);
    };

    getCharactersByCategory(category);
  }, [category]);

  const filterChar = (e) => {
    e.preventDefault();

    props.toFilter(e.target.value.trim().toLowerCase());
  };

  const radioCheck = (e) => {
    setCategory(e.target.value);
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
      <input
        type="radio"
        name="filter"
        className={classes["filter-radio"]}
        onClick={radioCheck}
        value="Breaking Bad"
      />
      <input
        type="radio"
        name="filter"
        className={classes["filter-radio"]}
        onClick={radioCheck}
        value="Better Call Saul"
      />
    </form>
  );
}

export default FilterForm;
