import { connect } from "react-redux";
import FavoriteLike from "../../Components/FavoriteLike/index";
import { addFavoriteBook, removeFavoriteBook } from "../../redux/action";

const mapStateToProps = (state) => ({
  booksLikedList: state.books_liked,
});

const mapDispatchToProps = (dispatch) => ({
  addBook: (bookInformation) => dispatch(addFavoriteBook(bookInformation)),
  removeBook: (bookId) => dispatch(removeFavoriteBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteLike);
