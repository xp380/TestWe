import React from "react";
import { Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import BookDescription from "../../Container/BookDescription";
import "./BookInformation.css";

const MovieInformation = (props) => {
  const { visible, setOpen, bookData } = props;
  const modalbody = {
    backgroundColor: "#212121",
  };
  const back = {
    backgroundColor: "#212121",
  };
  const close = (
    <div className="designclose">
      <CloseCircleOutlined />
    </div>
  );

  return (
    <Modal
      closeIcon={close}
      visible={visible}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1300}
      bodyStyle={modalbody}
      maskStyle={back}
      footer={false}
    >
      <div className="general">
        <BookDescription bookData={bookData} />
      </div>
    </Modal>
  );
};

export default MovieInformation;
