import React from "react";
import { Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import "./FavoriteLike.css";

const FavoriteLike = (props) => {
  const { data, addBook, booksLikedList, removeBook } = props;
  const alreadyLiked = booksLikedList.includes(data);

  return (
    <div className="favori">
      {alreadyLiked ? "Retirer de ma liste" : "Ajouter à ma liste"}
      <span className="icon">
        <Button
          onClick={() => (alreadyLiked ? removeBook(data.id) : addBook(data))}
          icon={alreadyLiked ? <MinusCircleOutlined /> : <PlusOutlined />}
        />
      </span>
    </div>
  );
};

export default FavoriteLike;
