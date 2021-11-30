import {
  START_BOOKS,
  SUCCESS_BOOKS,
  ERROR_BOOKS,
  ADD_FAVORITE_BOOKS,
  REMOVE_FAVORITE_BOOKS,
} from "./types";

const initialState = {
  all_books: [],
  loading: false,
  books_liked: [],
};

export const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_BOOKS:
      return {
        ...state,
        loading: false,
        all_books: action.payload,
      };
    case ERROR_BOOKS:
      return {
        ...state,
        loading: false,
      };
    case ADD_FAVORITE_BOOKS:
      return {
        ...state,
        books_liked: [action.payload, ...state.books_liked],
      };
    case REMOVE_FAVORITE_BOOKS:
      const filterFavorite = state.books_liked.filter(
        (data) => data.isbn !== action.payload
      );
      return {
        ...state,
        books_liked: filterFavorite,
      };
    default:
      return {
        ...state,
      };
  }
};

export default BookReducer;
