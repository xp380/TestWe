import React from "react";
import { Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import "./Like.css";

const Like = (props) => {
  const { bookData, addBook, booksLikedList, removeBook } = props;
  const alreadyLiked = booksLikedList.includes(bookData);

  return (
    <div className="favori">
      {alreadyLiked ? "Retirer de ma liste" : "Ajouter à ma liste"}
      <span className="icon">
        <Button
          onClick={() =>
            alreadyLiked ? removeBook(bookData.isbn) : addBook(bookData)
          }
          icon={alreadyLiked ? <MinusCircleOutlined /> : <PlusOutlined />}
        />
      </span>
    </div>
  );
};

export default Like;
