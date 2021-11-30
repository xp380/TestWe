import { connect } from "react-redux";
import BookDescription from "../../Components/BookDescription";

const mapStateToProps = (state) => ({
  favoriteBook: state.books_liked,
});

export default connect(mapStateToProps, null)(BookDescription);
