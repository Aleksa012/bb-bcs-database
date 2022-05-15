import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import classes from "./FilterForm.module.css";

function FilterForm() {
  const [filteredChar, setFilteredChar] = useState("");

  const filterChar = (e) => {
    e.preventDefault();

    setFilteredChar(e.target.value);
  };

  const radioCheck = (e) => {};

  //   useEffect(() => {
  //     const getFilteredChar = async function () {
  //       const data = await fetch(
  //         `https://www.breakingbadapi.com/api/characters?name=${filterChar}`
  //       ).then((res) => res.json());

  //       getChars(data)
  //     };
  //   }, [filterChar]);

  return (
    <form className={classes["filter-form"]}>
      <div className={classes["filter-form__wrapper"]}>
        <input
          type="text"
          className={classes["filter-input"]}
          onChange={filterChar}
        />
        <button className={classes["filter-btn"]}>
          <FaSearch />
        </button>
      </div>
      <input
        type="radio"
        name="filter"
        className={classes["filter-radio"]}
        onClick={radioCheck}
      />
      <input
        type="radio"
        name="filter"
        className={classes["filter-radio"]}
        onClick={radioCheck}
      />
      <input
        type="radio"
        name="filter"
        className={classes["filter-radio"]}
        onClick={radioCheck}
      />
      <input
        type="radio"
        name="filter"
        className={classes["filter-radio"]}
        onClick={radioCheck}
      />
    </form>
  );
}

export default FilterForm;
