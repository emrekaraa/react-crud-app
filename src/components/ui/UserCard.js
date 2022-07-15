import React from "react";
import {
  DeleteFilled,
  EditOutlined,
  GlobalOutlined,
  HeartFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Card, Col } from "antd";

import ModalBox from "./ModalBox";

const UserCard = (props) => {
  const { user, users, setUsers } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Col key={user?.id} xs={24} lg={8} xl={6} style={{ padding: "15px" }}>
        <Card
          cover={
            <div
              style={{
                backgroundColor: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
                border: "1px solid #e8e8e8",
                borderBottom: "none",
              }}
            >
              <img
                alt="example"
                src={`https://avatars.dicebear.com/api/avataaars/${user?.id}.svg`}
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            </div>
          }
          actions={[
            <span
              style={{
                color: "red",
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                setUsers(
                  users.map((u) =>
                    u.id === user.id ? { ...u, favorite: !user.favorite } : u
                  )
                );
              }}
            >
              {user?.favorite ? <HeartFilled /> : <HeartOutlined />}
            </span>,
            <EditOutlined
              key="edit"
              style={{ fontSize: "18px" }}
              onClick={() => setShowModal(true)}
            />,
            <DeleteFilled
              key="ellipsis"
              style={{ fontSize: "18px" }}
              onClick={() => {
                setUsers(users.filter((u) => u.id !== user.id));
              }}
            />,
          ]}
        >
          <h3>{user?.name}</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
              fontSize: "14px",
              color: "rgba(0,0,0,.65)",
            }}
          >
            <span style={{ marginBottom: "4px" }}>
              <MailOutlined style={{ fontSize: "18px", marginRight: "6px" }} />{" "}
              {user?.email}
            </span>
            <span style={{ marginBottom: "4px" }}>
              <PhoneOutlined style={{ fontSize: "18px", marginRight: "6px" }} />{" "}
              {user?.phone}
            </span>
            <span style={{ marginBottom: "4px" }}>
              <GlobalOutlined
                style={{ fontSize: "18px", marginRight: "6px" }}
              />{" "}
              {"http://" + user?.website}
            </span>
          </div>
        </Card>
      </Col>

      {/* Modal Box */}
      <ModalBox
        user={user}
        setUsers={setUsers}
        users={users}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default UserCard;
