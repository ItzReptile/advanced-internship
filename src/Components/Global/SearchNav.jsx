import axios from "axios";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { LBM } from "./LBM";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
export const SearchNav = () => {
  const [fetchData, setfetchData] = useState([]);
  const [isLeftBarVisible, setIsLeftBarVisible] = useState(false);

  const bookSearch = async function (search) {
    try {
      const response = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`
      );
      const fetchedBooks = response.data;
      setfetchData(fetchedBooks); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    if (searchTerm.length >= 1) {
      bookSearch(searchTerm);
    } else {
      setfetchData([]);
    }
  };
  const displayLeft = () => {
    setIsLeftBarVisible(!isLeftBarVisible);
  };
  return (
    <div className="search-wrapper">
      <figure>
        <img src="logo" alt="" />
      </figure>
      <div className="search-button-wrapper">
        <div className="search-button">
          <input
            placeholder="Search for books"
            type="search"
            className="search-btn"
            onChange={handleSearch}
          />
          <i  className="search-icon">
            <BsSearch />
          </i>
        </div>
      </div>
      <div className="search-button-burger">
  {isLeftBarVisible ? (
    <i className="icon-size" onClick={displayLeft}>
      <AiOutlineClose />
    </i>
  ) : (
    <i className="icon-size" onClick={displayLeft}>
      <GiHamburgerMenu />
    </i>
  )}
</div>
      {fetchData.length > 0 && (
        <div className="search-results">
          <ul className="search-results-wrapper">
            {fetchData.map((book, index) => (
              <Link to={`/book/${book.id}`} key={index}>
                <div className="search-wrapper-results">
                  <figure className="search-img-wrapper">
                    <img src={book.imageLink} alt="" className="search-img" />
                  </figure>
                  <div className="search-book-details-wrapper">
                    <h2 className="search-results-book">{book.title}</h2>
                    <h4 className="search-results-author">{book.author}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      )}
      {isLeftBarVisible && <LBM/>}
    </div>
  );
};
