import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TrashIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/StarOutlined";

import styles from "./SavedMovies.module.css";
import { StayPrimaryLandscapeSharp } from "@material-ui/icons";

const MovieItem = (props) => {
  const handleMouseOver = (item) => {
    // console.log(item)
    // const index = ratings.findIndex((el) => el.id === item.id)
    // const items = [...ratings]
    // items[index].active = true
    // setRatings(items)
    const items = ratings.map((el, index) => {
      console.log(index, item.id);
      if (index <= item.id) {
        return Object.assign({}, { ...el }, { active: true });
      }
      return Object.assign({}, { ...el }, { active: false });
    });
    setRatings(items);
    console.log("items: ", items);
  };
  const movie = props.movie;
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  const [ratings, setRatings] = useState([
    { id: 0, active: false },
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ]);
  return (
    <div className={styles.background}><div className={styles.card_container} >
      <div className={styles.poster_container}>
        <img src={imgUrl} alt={movie.title} />
      </div>
      <div className={styles.description_container}><span className={styles.movie_title}>Title:{movie.title}</span>
      <span className={styles.release_date}>Release date: {movie.release_date}</span>
      <div className={styles.wrapper}><div className={styles.wrapper2}><span className={styles.vote_average}>Rating: {movie.vote_average}</span>
      <span className={styles.ratings}>Rate:    
         {ratings.map((item, index) => {
          return (
            <StarIcon
              className={[styles.star, item.active && styles.active].join(" ")}
              onMouseOver={() => handleMouseOver(item)}
            />
          );
        })}
      </span></div>
      <span className={styles.delete_button}>
        <Button style={{color: 'red'}}
        onClick={() => props.onMovieDelete(movie.id)}>
          <TrashIcon />
        </Button>
      </span></div>
    </div></div></div>
  );
};

const SavedMovies = (props) => {
  return (
    <div className={styles.container}>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <ul className={styles.saved_container}>
          {props.savedMovies.map((movie) => (
            <MovieItem
              movie={movie}
              onMovieDelete={props.onMovieDelete}
              key={movie.id}
            />
          ))}
        </ul>
      ) : (
        "No saved movies"
      )}
    </div>
  );
};

export default SavedMovies;
