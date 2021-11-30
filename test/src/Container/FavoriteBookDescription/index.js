import { connect } from "react-redux";
import FavoriteBookDescription from "../../Components/FavoriteBookDescription";

const mapStateToProps = (state) => ({
  favoriteMovie: state.movies_liked,
});

export default connect(mapStateToProps, null)(FavoriteBookDescription);
