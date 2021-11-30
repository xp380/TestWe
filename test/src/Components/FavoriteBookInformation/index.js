import React from "react";
import { Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./FavoriteBookInformation.css";
import FavoriteBookDescription from "../../Container/FavoriteBookDescription/";

const FavoriteBookInformation = (props) => {
  const { visible, setOpen, data } = props;
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
      <div className="test">
        <FavoriteBookDescription data={data} />
      </div>
    </Modal>
  );
};

export default FavoriteBookInformation;
