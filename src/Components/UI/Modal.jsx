import React, { useEffect, useState } from "react";
import google from "../../assets/google.png";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";

export const Modal = ({ isModalOpen, modalClosed, onLoginSuccess }) => {
  const [value, setValue] = useState("");

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const sighIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);

      modalClosed();
      onLoginSuccess();
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-overlay-display">
          <section id="modal">
            <div className="modal-wrapper">
              <div className="modal-base">
                <div className="modal-content">
                  <div className="modal-title">Log In To Summarist</div>
                  <button className="btn log-in-guest">
                    <figure className="modal-img-wrapper">
                      <img
                        className="guest-img"
                        src="https://www.pngall.com/wp-content/uploads/8/Guest-PNG-Free-Download.png"
                        alt=""
                      />
                    </figure>
                    <div>Login As A Guest</div>
                  </button>
                  <div className="modal-border">
                    <span className="modal-border--text">or</span>
                  </div>
                  {value ? (
                    <button onClick={logOut} className="btn">
                      logout
                    </button>
                  ) : (
                    <button onClick={sighIn} className="btn log-in-google">
                      <figure className="modal-img-wrapper">
                        <img className="google-img" src={google} alt="" />
                      </figure>
                      <div>Login With Google</div>
                    </button>
                  )}

                  <div className="modal-border">
                    <span className="modal-border--text">or</span>
                  </div>
                  <form className="modal-main--form" action="">
                    <input
                      className="input-form"
                      required
                      type="text"
                      placeholder="Email Address"
                    />
                    <input
                      className="input-form"
                      required
                      type="text"
                      placeholder="Password"
                    />
                    <button className="btn">
                      <span>Login</span>
                    </button>
                  </form>
                </div>
                <div className="forgot-password">Forgot your password?</div>
                <button className="accountless">Don't have an account?</button>
                <div onClick={modalClosed} className="close-modal">
                  <svg
                    className="close-modal-x"
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
