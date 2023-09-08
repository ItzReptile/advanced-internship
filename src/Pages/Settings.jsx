import React, { useState } from "react";
import { LeftBar } from "../Components/Global/LeftBar";
import { SearchNav } from "../Components/Global/SearchNav";
import settingsImg from "../assets/login.png";
import { useSelector, useDispatch } from "react-redux";

import { openModal } from "../Redux/LoginSlice";
import { logOut } from "../Redux/authSlice";

export const Settings = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const dispatch = useDispatch();
  const handleWork = () => {
    if (isLoggedIn) {
      dispatch(logOut());
      setIsLoggedIn(false);
      localStorage.setItem("isLoggedIn", "false");
    } else {
      dispatch(openModal());
    }
  };
  return (
    <>
      <LeftBar />
      <SearchNav />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <h1 className="settings-title">Settings</h1>
            {!isLoggedIn && (
              <div className="settings-header">
                <figure className="settings-img-wrapper">
                  <img src={settingsImg} className="settings-img" alt="" />
                </figure>
                <h2 className="settings-details">
                  Log In to your account to see your details
                </h2>
                <button
                  onClick={handleWork}
                  className="btn"
                  style={{ width: 150 }}
                >
                  Login
                </button>
              </div>
            )}
            {isLoggedIn && (
              <>
                <div className="sub-status">
                  <h2 className="sub-title">Your Subscription Plan</h2>
                  <h3 className="sub-status-des">Basic</h3>
                  <a href="/choose-plan" style={{ width: 200 }} className="btn">
                    Upgrade To Premium
                  </a>
                </div>
                <div className="sub-status">
                  <h2 className="sub-title">Email</h2>
                  <h3 className="sub-status-des">hanna@gmail.com</h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
