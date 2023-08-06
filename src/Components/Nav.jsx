import React from "react";
import logo from "../assets/logo.png";
import { Modal } from "./UI/Modal";
import { openModal } from "../Redux/LoginSlice"

import { useDispatch, useSelector } from "react-redux";
export const Nav = () => {
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const modalClicked = () => {
    dispatch(openModal());
  };

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img className="nav__img" src={logo} alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login" onClick={modalClicked}>
            Login
          </li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>

      {isModalOpen && <Modal />}
    </nav>
  );
};
