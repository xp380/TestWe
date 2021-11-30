import React from "react";
import "./FavoriteBookDescription.css";
import FavoriteLike from "../../Container/FavoriteLike";
import moment from "moment";

const FavoriteBookDescription = (props) => {
  const { data } = props;
  console.log("fghyu", data);
  return (
    <div className="micro">
      <div className="marge">
        <h4 className="titre">{data.bookData.name}</h4>
        <div className="date">
          Date de sortie:{""}
          {moment(data.bookData.released).format("DD/MM/YYYY")}
        </div>
        <FavoriteLike data={data} />
      </div>
    </div>
  );
};

export default FavoriteBookDescription;
