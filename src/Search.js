import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    //Do something with input
    console.log("Ok search >> ", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search__inputIcon" />
      </div>

      {!hideButtons ? (
        <div className="search__button">
          <Button type="submit" onClick={search} variant="outlined">
            ask mohit
          </Button>

          <Button variant="outlined">i'm feeling lucky</Button>
        </div>
      ) : (
        <div className="search__button">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            ask mohit
          </Button>

          <Button className="search__buttonsHidden" variant="outlined">
            i'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
