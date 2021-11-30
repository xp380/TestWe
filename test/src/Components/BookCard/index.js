import React, { useState } from "react";
import { Card } from "antd";
import BookInformation from "../../Container/BookInformation";
import "./BookCard.css";

const BookCard = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const bookData = props;

  return (
    <>
      <Card
        title={bookData.bookData.name}
        className="custom-card"
        hoverable
        onClick={() => setIsVisible(true)}
      >
        <p className="click">Click Me</p>
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
