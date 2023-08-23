import React, { useState } from "react";
import { AiOutlineHome, AiFillQuestionCircle } from "react-icons/ai";
import { RiFlag2Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { BiLogIn,BiLogOut } from "react-icons/bi";
import { BsSearch, BsFillGearFill } from "react-icons/bs";
import summary from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Redux/authSlice";
export const LeftBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const HandleloginNlogout = () => {
    if (isLoggedIn) {
      dispatch(logOut());
    } else {
      dispatch(isModalOpen());
    }
  };

  return (
    <div className="sidebar">
      <figure className="sidebar-img-wrapper">
        <img className="sidebar-img" src={summary} alt="" />
      </figure>
      <div className="sidebar-wrapper">
        <div className="sidebar-navs">
          <Link to={"/for-you"}>
            <div className="sidebar-nav">
              <div className="sidebar-deactive sidebar-active"></div>
              <i className="sidebar-nav-icon">
                <AiOutlineHome />
              </i>

              <h1 className="sidebar-nav-title">For you</h1>
            </div>
          </Link>

          <Link to={"/library"}>
            <div className="sidebar-nav">
              <div className="sidebar-deactive sidebar-active"></div>
              <i className="sidebar-nav-icon">
                <RiFlag2Line />
              </i>
              <h1 className="sidebar-nav-title">My Library</h1>
            </div>
          </Link>

          <div className="sidebar-nav">
            <div className="sidebar-deactive sidebar-active"></div>
            <i className="sidebar-nav-icon">
              <FaPencilAlt />
            </i>
            <h1 className="sidebar-nav-title">Highlights</h1>
          </div>
          <div className="sidebar-nav">
            <div className="sidebar-deactive sidebar-active"></div>
            <i className="sidebar-nav-icon">
              <BsSearch />
            </i>
            <h1 className="sidebar-nav-title">Search</h1>
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-nav">
            <div className="sidebar-deactive sidebar-active"></div>
            <i className="sidebar-nav-icon">
              <BsFillGearFill />
            </i>
            <h1 className="sidebar-nav-title">Settings</h1>
          </div>
          <div className="sidebar-nav">
            <div className="sidebar-deactive sidebar-active"></div>
            <i className="sidebar-nav-icon">
              <AiFillQuestionCircle />
            </i>
            <h1 className="sidebar-nav-title">Help & Support</h1>
          </div>
          <div className="sidebar-nav" >
            <div className="sidebar-deactive sidebar-active"></div>
            <i className="sidebar-nav-icon">
            {isLoggedIn ? (
            <BiLogOut onClick={HandleloginNlogout} />
          ) : (
            <BiLogIn onClick={HandleloginNlogout} />
          )}
            </i>
            <h1 className="sidebar-nav-title"> {isLoggedIn ? "Logout" : "Login"}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
