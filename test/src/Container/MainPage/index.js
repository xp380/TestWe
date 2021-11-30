import { connect } from "react-redux";
import MainPage from "../../Components/MainPage";
import { allBooks } from "../../redux/index";

const mapStateToProps = (state) => ({
  all_books: state.all_books,
  favorite_books: state.books_liked,
});

const mapDispatchToProps = (dispatch) => ({
  apiBooks: () => dispatch(allBooks()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
