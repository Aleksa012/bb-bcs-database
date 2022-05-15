import React from "react";

import classes from "./Card.module.css";

function Card({ img, name, birthday, status }) {
  return (
    <article className={classes.card}>
      <img src={img} alt={name} />
      <div className={classes["card__info"]}>
        <span className={classes["card__name"]}>{name}</span>
        <span className={classes["card__birthday"]}>{birthday}</span>
        <span className={classes["card__status"]}>{status}</span>
      </div>
    </article>
  );
}

export default Card;
