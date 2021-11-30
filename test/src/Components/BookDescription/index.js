import React from "react";
import "./BookDescription.css";
import Like from "../../Container/Like";
import moment from "moment";

const BookDescription = (props) => {
  const { bookData } = props;

  return (
    <div className="micro">
      <div className="marge">
        <h4 className="titre">{bookData.bookData.name}</h4>
        <div className="date">
          Nombre de pages:{bookData.bookData.numberOfPages}
        </div>
        <div className="date">
          Date de sortie:{""}
          {moment(bookData.bookData.released).format("DD/MM/YYYY")}
        </div>

        <Like bookData={bookData} />
      </div>
    </div>
  );
};

export default BookDescription;
