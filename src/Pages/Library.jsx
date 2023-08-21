import React from "react";
import { LeftBar } from "../Components/Global/LeftBar";
import { SearchNav } from "../Components/Global/SearchNav";

export const Library = () => {
  return (
    <>
      <LeftBar />
      <SearchNav />
      <div className="library-wrapper">
        <div className="container">
          <div className="row">
            <div className="library-header-text">
            Saved Books
            </div>
            <div className="library-header-subtext">
              {} items
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
