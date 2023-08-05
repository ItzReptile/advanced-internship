import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Modal } from "./UI/Modal";
import { useNavigate } from "react-router-dom";
export const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const modalClicked = () => {
    setIsModalOpen(true);
  };
  const modalClosed = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/for-you");
    }
  },[isLoggedIn,navigate]);

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
