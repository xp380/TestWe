import { connect } from "react-redux";
import FavoriteBookDescription from "../../Components/FavoriteBookDescription";

const mapStateToProps = (state) => ({
  favoriteBook: state.books_liked,
});

export default connect(mapStateToProps, null)(FavoriteBookDescription);
