import React from "react";
import "./SearchPage";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
// import { actionTypes } from "./reducer";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";

import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

function SearchPage() {
  const [{ term = "tesla" }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  //mock api call
  // const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          {/* <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          /> */}
          <div className="my__logo">
            <h2 className="my__logo__name">Ask MOHIT</h2>
          </div>
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="#">all</Link>
              </div>
              <div className="searchPage__option">
                <OndemandVideoIcon />
                <Link to="#">Videos</Link>
              </div>

              <div className="searchPage__option">
                <ImageIcon />
                <Link to="#">Images</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="#">news</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="#">Shopping</Link>
              </div>
              {/* <div className="searchPage__option">
                <RoomIcon />
                <Link to="#">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="#">Plus</Link>
              </div> */}
            </div>
            {/* <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/parametre">settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/outils">tools</Link>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            about {data?.searchInformation.formattedTotalResults} result in (
            {data?.searchInformation.formattedSearchTime} seconds) by mohit for{" "}
            {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.displayLink}>
                <a className="searchPage__resultLink" href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchPage__resultImage"
                        src={
                          item.pagemap?.cse_image?.length > 0 &&
                          item.pagemap?.cse_image[0]?.src
                        }
                        alt=""
                      />
                    )}
                </a>
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
