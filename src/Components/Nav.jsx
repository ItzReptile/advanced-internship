import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Modal } from "./UI/Modal";
export const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalClicked = () => {
    setIsModalOpen(true);
  };
  const modalClosed = () => {
    setIsModalOpen(false);
  };
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img className="nav__img" src={logo} alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <li
            className="nav__list nav__list--login"
            onClick={modalClicked}
            modalClicked={modalClicked}
          >
            Login
          </li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>

      {isModalOpen && (
        <Modal
          onClose={modalClosed}
          modalClosed={modalClosed}
          isModalOpen={isModalOpen}
        />
      )}
    </nav>
  );
};
