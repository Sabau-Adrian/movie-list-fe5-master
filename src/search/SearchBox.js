import React, { useState } from "react";
import {
  Button,
  TextField,
  Radio,
  FormControlLabel,
  RadioGroup,
  Paper,
  Grid,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { searchMovies, searchActors } from "../shared/API";

import styles from "./SearchBox.module.css";

const MovieList = (props) => {
  return (
    <div>
      <ul className={styles.list}>
        {props.movies.map((movie) => (
          
            <li className={styles.listItem} key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                    alt={movie.title}
                  />
                   <b>{movie.title}</b> ({movie.release_date})
                   <Button
                    className={styles.addMovie}
                    color="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      props.onMovieAdd(movie);
                    }}
                  >
                    <AddIcon /> Add movie
                  </Button>
                
                
              
            </li>
          
        ))}
      </ul>
    </div>
  );
};

const SearchBox = (props) => {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchMode, setSearchMode] = useState("movies");

  const localMovieAdd = (movie) => {
    setMovies([]);
    props.onMovieAdd(movie);
  };
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <TextField
          color="primary"
          label="Search for a movie"
          variant="outlined"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <Button
        style={{
          backgroundColor: '#00ADB5',
          color: 'white',
          margin: '20px',
          textAlign: "center"
      }}
          variant="contained"
          color="primary"
          onClick={() =>
            // Won't implement this for now
            // searchMode === 'movies'
            //   ? searchMovies(term).then((res) => setMovies(res.data.results))
            //   : searchActors(term).then((res) => setMovies(res.data.results))
            searchMovies(term).then((res) => setMovies(res.data.results))
          }
        >
          Search
        </Button>
        {/* <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="top"
        >
          <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="Movies"
            labelPlacement="start"
            checked={searchMode === "movies"}
            onChange={() => setSearchMode("movies")}
          />
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="Actors"
            labelPlacement="start"
            checked={searchMode === "actors"}
            onChange={() => setSearchMode("actors")}
          />
        </RadioGroup> */}
      </div>

      <MovieList movies={movies} onMovieAdd={localMovieAdd} />
    </div>
  );
};

export default SearchBox;
