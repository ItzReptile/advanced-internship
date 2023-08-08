import React from "react";
import { BsSearch } from "react-icons/bs"
export const SearchNav = () => {
  return (
    <div className="search-wrapper">
      <figure>
        <img src="logo" alt="" />
      </figure>
      <div className="search-button-wrapper">
        <div className="search-button">
          <input
            placeholder="Search for books"
            type="Search"
            className="search-btn"
          />
          <i className="search-icon">
            <BsSearch/>
          </i>
        </div>
      </div>
    </div>
  );
};
