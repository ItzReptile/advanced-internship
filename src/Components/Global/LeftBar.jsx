import React, { useState } from "react";
import { AiOutlineHome, AiFillQuestionCircle } from "react-icons/ai";
import { RiFlag2Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { BsSearch, BsFillGearFill } from "react-icons/bs";
import summary from "../../assets/logo.png";
export const LeftBar = () => {
  return (
    <div className="sidebar">
      <figure className="sidebar-img-wrapper">
        <img className="sidebar-img" src={summary} alt="" />
      </figure>
      <div className="sidebar-wrapper">
        <div className="sidebar-navs">
          <div className="sidebar-nav">
            <div className="sidebar-deactive sidebar-active"></div>
            <i className="sidebar-nav-icon">
              <AiOutlineHome />
            </i>
            <h1 className="sidebar-nav-title">For you</h1>
          </div>
          <div className="sidebar-nav">
            <div className="sidebar-deactive sidebar-active"></div>
            <i className="sidebar-nav-icon">
              <RiFlag2Line />
            </i>
            <h1 className="sidebar-nav-title">My Library</h1>
          </div>
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
              < BsFillGearFill />
            </i>
            <h1 className="sidebar-nav-title">Settings</h1>
          </div>
          <div className="sidebar-nav">
            <div className="sidebar-deactive sidebar-active"></div>
            <i className="sidebar-nav-icon">
              <AiFillQuestionCircle/>
            </i>
            <h1 className="sidebar-nav-title">Help & Support</h1>
          </div>
          <div className="sidebar-nav">
            <div className="sidebar-deactive sidebar-active"></div>
            <i className="sidebar-nav-icon">
              <BiLogIn />
            </i>
            <h1 className="sidebar-nav-title">Log</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
