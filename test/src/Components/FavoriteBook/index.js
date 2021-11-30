import React, { useState } from "react";
import FavoriteBookInformation from "../../Container/FavoriteBookInformation";
import { Card } from "antd";

const FavoriteBook = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { data } = props;
  return (
    <>
      <Card
        title={data.bookData.name}
        className="custom-card"
        hoverable
        onClick={() => setIsVisible(true)}
      >
        <p>Auteur{data.bookData.authors}</p>
        <FavoriteBookInformation
          visible={isVisible}
          setOpen={setIsVisible}
          data={data}
        />
      </Card>
    </>
  );
};

export default FavoriteBook;
