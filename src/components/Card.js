import React, { useState } from "react";

import Modal from "./Modal";

import classes from "./Card.module.css";

function Card({ character: char }) {
  const [showModal, setShowModal] = useState(false);

  const seeDetails = (e) => {
    e.preventDefault();

    setShowModal(true);
  };

  return (
    <article className={classes.card}>
      <img src={char.img} alt={char.name} />
      <div className={classes["card__info"]}>
        <span className={classes["card__name"]}>{char.name}</span>
        <span className={classes["card__birthday"]}>{char.birthday}</span>
        <span className={classes["card__status"]}>{char.status}</span>
        <button onClick={seeDetails}>Details</button>
        {showModal && <Modal character={char} setShowModal={setShowModal} />}
      </div>
    </article>
  );
}

export default Card;
