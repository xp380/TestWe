import axios from "axios";
import { startBook, successBook, errorBook } from "./action";

export const allBooks = () => (dispatch) => {
  dispatch(startBook());
  return axios
    .get(`https://anapioficeandfire.com/api/books`)
    .then(({ data }) => {
      dispatch(successBook(data));
    })
    .catch((error) => {
      dispatch(errorBook(error));
    });
};
