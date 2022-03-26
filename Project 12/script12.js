"use strict";

const numberOfFilms = +prompt('How many films did u watch?', '');
const boool = false;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: boool
};

const a = prompt('Last watched film?',''),
      b = prompt('Your rate?',''),
      c = prompt('Last watched film?',''),
      d = prompt('Your rate?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log('Number of films: ', personalMovieDB.count);
console.log(personalMovieDB.movies);