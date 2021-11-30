import React, { useState } from "react";
import { Card } from "antd";
import BookInformation from "../../Container/BookInformation";
import "./BookCard.css";
// import moment from "moment";

const BookCard = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const bookData = props;
  // console.log("res", bookData);

  return (
    <>
      <Card
        title={bookData.bookData.name}
        className="custom-card"
        hoverable
        onClick={() => setIsVisible(true)}
      >
        <p>Auteur{bookData.bookData.authors}</p>
        {/* <p>{bookData.bookData.country}</p>
        <p>{moment(bookData.bookData.released).format("DD/MM/YYYY")}</p> */}
        <BookInformation
          visible={isVisible}
          setOpen={setIsVisible}
          bookData={bookData}
        />
      </Card>
    </>
  );
};

export default BookCard;
