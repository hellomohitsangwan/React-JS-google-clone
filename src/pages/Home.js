import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Avatar from "@material-ui/core/Avatar";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "../Search";
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">about</Link>
          <Link to="/store">store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">gmail</Link>
          <Link to="/images">images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        {/* <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"></img> */}
        <div className="my__logo">
          <h2 className="my__logo__name">Ask MOHIT</h2>
        </div>
        <Search />
        {/* link */}
        {/* link */}
        {/* icon */}
        {/* avatar */}
      </div>
    </div>
  );
}
export default Home;
