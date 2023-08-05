import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { Modal } from "./UI/Modal";
export const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalClicked = () => {
    setIsModalOpen(true);
  };
  const modalClosed = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="reviews">
      <div className="row">
        <div className="container">
          <div className="section__title">What our members say</div>
          <div className="reviews__wrapper">
            <div className="review">
              <div className="review__header">
                <div className="review__name">Hanna M.</div>
                <div className="review__stars">
                  <BsStarFill /> <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                This app has been a <b>game-changer</b> for me! It's saved me so
                much time and effort in reading and comprehending books. Highly
                recommend it to all book lovers.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">David B.</div>
                <div className="review__stars">
                  <BsStarFill /> <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                I love this app! It provides
                <b> concise and accurate summaries</b> of books in a way that is
                easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Nathan S.</div>
                <div className="review__stars">
                  <BsStarFill /> <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.
                <b>The summaries are well-written and informative.</b>
                Definitely worth downloading.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Ryan R.</div>
                <div className="review__stars">
                  <BsStarFill /> <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                If you're a busy person who
                <b> loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide a great overview of the book's content.
              </div>
            </div>
          </div>
          <div className="reviews__btn--wrapper">
            <button onClick={modalClicked} className="btn home__cta--btn">Login</button>
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
