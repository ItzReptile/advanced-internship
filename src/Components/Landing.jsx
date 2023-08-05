import React, { useState } from "react";
import LandingImg from "../assets/landing.png";
import { Modal } from "./UI/Modal";
export const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalClicked = () => {
    setIsModalOpen(true);
  };
  const modalClosed = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <div className="landing__content">
              <div className="landing__content__title">
                Gain more knowledge <br className="remove--tablet" />
                in less time
              </div>
              <div className="landing__content__subtitle">
                Great summaries for busy people,
                <br className="remove--tablet" />
                individuals who barely have time to read,
                <br className="remove--tablet" />
                and even people who don’t like to read.
              </div>
              <button onClick={modalClicked} className="btn home__cta--btn">Login</button>
            </div>
            <figure className="landing__image--mask">
              <img src={LandingImg} alt="landing" />
            </figure>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onClose={modalClosed}
          modalClosed={modalClosed}
          isModalOpen={isModalOpen}
        />
      )}
    </section>
  );
};
