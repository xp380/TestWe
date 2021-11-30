import {
  START_BOOKS,
  SUCCESS_BOOKS,
  ERROR_BOOKS,
  ADD_FAVORITE_BOOKS,
  REMOVE_FAVORITE_BOOKS,
} from "./types";

export const startBook = () => ({
  type: START_BOOKS,
});

export const successBook = (allBooks) => ({
  type: SUCCESS_BOOKS,
  payload: allBooks,
});

export const errorBook = (error) => ({
  type: ERROR_BOOKS,
  payload: error,
});

export const addFavoriteBook = (bookInformation) => ({
  type: ADD_FAVORITE_BOOKS,
  payload: bookInformation,
});

export const removeFavoriteBook = (id) => ({
  type: REMOVE_FAVORITE_BOOKS,
  payload: id,
});
