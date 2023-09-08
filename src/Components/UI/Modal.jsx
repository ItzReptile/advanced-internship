import React, { useEffect, useState } from "react";
import google from "../../assets/google.png";
import { TbRefreshDot } from "react-icons/tb";
import {
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../Redux/LoginSlice";
import { logIn, logOut } from "../../Redux/authSlice";
export const Modal = () => {
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [value, setValue] = useState("");
  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [success, setSuccessMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [accountless, setAccountless] = useState(true);
  const [show, setShow] = useState(false);

  const isModalClose = () => {
    dispatch(closeModal());
  };
  const handleSignUp = async () => {
    setIsLoading(true);
    await setPersistence(auth, inMemoryPersistence);
    await createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user.uid);
        setIsLoading(false);
        setSuccessMessage("User created");
    
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Error creating user:", errorMessage);
        setIsLoading(false);
        seterrorMessage(errorMessage);
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    dispatch(logOut());
    localStorage.removeItem("isLoggedIn");
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await setPersistence(auth, inMemoryPersistence);
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      console.log("Logged in user:", user.uid);
      setIsLoading(false);
      dispatch(closeModal());
      dispatch(logIn());
      navigate("/for-you");
      window.location.reload();
      localStorage.setItem("isLoggedIn", "true");
    } catch (error) {
      const errorMessage = error.message;
      console.error("Error logging in with Google:", errorMessage);
      setIsLoading(false);
      seterrorMessage(errorMessage);
    }
  };

  const signInAnnom = () => {
    setIsGuestLoading(true);

    setTimeout(() => {
      signInAnonymously(auth, provider)
        .then((userCredential) => {
          navigate("/for-you");
          dispatch(closeModal());
          dispatch(logIn());
          localStorage.setItem("isLoggedIn", "true");
          window.location.reload();
        })
        .finally(() => {
          setIsGuestLoading(false);
          
        });
    }, 2500);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };
  const handleLoginWithEmailAndPassword = async () => {
    try {
      setIsLoading(true);
      await setPersistence(auth, inMemoryPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );
      const user = userCredential.user;
      console.log("Logged in user:", user.uid);
      setIsLoading(false);
      dispatch(closeModal());
      dispatch(logIn());
      window.location.reload();
      localStorage.setItem("isLoggedIn", "true");
  
    } catch (error) {
      const errorMessage = error.message;
      console.error("Error logging in:", errorMessage);
      setIsLoading(false);
      seterrorMessage(errorMessage);
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    if (storedLoginState === "true") {
      dispatch(logIn());
    }
  }, []);

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
                  <div className="error">
                    {errorMessage && (
                      <div className="error-message">{errorMessage}</div>
                    )}
                    {success && <div className="error-message">{success}</div>}
                  </div>
                  {accountless && (
                    <div className="modal-title">Log In To Summarist</div>
                  )}
                  {show && (
                    <div className="modal-title">Sign Up To Summarist</div>
                  )}
                  {accountless && (
                    <>
                      {isGuestLoading ? (
                        <button className="btn log-in-guest" disabled>
                          {isGuestLoading && (
                            <i className="loading-state-rotate">
                              <TbRefreshDot />
                            </i>
                          )}
                        </button>
                      ) : !isLoggedIn ? (
                        <button
                          onClick={signInAnnom}
                          className="btn log-in-guest"
                        >
                          <figure className="modal-img-wrapper">
                            <img
                              className="guest-img"
                              src="https://www.pngall.com/wp-content/uploads/8/Guest-PNG-Free-Download.png"
                              alt=""
                            />
                          </figure>
                          <div>Login As A Guest</div>
                        </button>
                      ) : (
                        <button onClick={handleLogout} className="btn">
                          logout
                        </button>
                      )}

                      <div className="modal-border">
                        <span className="modal-border--text">or</span>
                      </div>
                    </>
                  )}
                  {value ? (
                    <button onClick={handleLogout} className="btn">
                      logout
                    </button>
                  ) : (
                    <button
                      onClick={handleGoogleLogin}
                      className="btn log-in-google"
                    >
                      {isLoading ? (
                        <i className="loading-state-rotate">
                          <TbRefreshDot />
                        </i>
                      ) : (
                        <>
                          <figure className="modal-img-wrapper">
                            <img className="google-img" src={google} alt="" />
                          </figure>
                          <div>Login With Google</div>
                        </>
                      )}
                    </button>
                  )}
                  <div className="modal-border">
                    <span className="modal-border--text">or</span>
                  </div>
                  {accountless && (
                    <form
                      className="modal-main--form"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        className="input-form"
                        required
                        type="text"
                        onChange={handleEmailChange}
                        placeholder="Email Address"
                        value={emailValue}
                      />
                      <input
                        className="input-form"
                        required
                        type="text"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        value={passwordValue}
                      />
                      <button
                        onClick={handleLoginWithEmailAndPassword}
                        className="btn"
                      >
                        <span>Login</span>
                      </button>
                    </form>
                  )}{" "}
                  {show && (
                    <form
                      className="modal-main--form"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        className="input-form"
                        required
                        type="text"
                        onChange={handleEmailChange}
                        placeholder="Email Address"
                        value={emailValue}
                      />
                      <input
                        className="input-form"
                        required
                        type="text"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        value={passwordValue}
                      />
                      <button onClick={handleSignUp} className="btn">
                        <span>Sign Up</span>
                      </button>
                    </form>
                  )}
                </div>
                {accountless && (
                  <>
                    <div
                      style={{ cursor: "no-drop" }}
                      className="forgot-password"
                    >
                      Forgot your password?
                    </div>
                    <button
                      onClick={() => {
                        setAccountless(false);
                        setShow(true);
                      }}
                      className="accountless"
                    >
                      Don't have an account?
                    </button>
                  </>
                )}
                {show && (
                  <>
                    <div>
                      <button
                        onClick={() => {
                          setAccountless(true);
                          setShow(false);
                        }}
                        className="accountless"
                      >
                        Already Have An Account?
                      </button>
                    </div>
                  </>
                )}
                <div onClick={isModalClose} className="close-modal">
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
