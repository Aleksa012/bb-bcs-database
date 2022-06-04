import React, { useState } from "react";
import { createPortal } from "react-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "./store/store";

import classes from "./Modal.module.css";

function Modal({ character: char, setShowModal }) {
  let marked = false;

  const favorites = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  if (favorites.includes(char.char_id)) {
    marked = true;
  }

  return createPortal(
    <div
      onClick={(e) => {
        setShowModal(false);
      }}
      className={classes.backdrop}
    >
      <div onClick={(e) => e.stopPropagation()} className={classes.modal}>
        <img className={classes["modal__img"]} src={char.img} />
        <div className={classes["modal__details"]}>
          <span className={classes["modal__name"]}>{char.name}</span>
          <span className={classes["modal__birthday"]}>{char.birthday}</span>
          <span className={classes["modal__status"]}>{char.status}</span>
          <div
            onClick={(e) => {
              marked = true;

              dispatch(favoritesActions.toggle(char.char_id));
            }}
            className={classes["bookmark-container"]}
          >
            <BsFillBookmarkFill
              className={
                marked ? classes["bookmark--checked"] : classes.bookmark
              }
            />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
