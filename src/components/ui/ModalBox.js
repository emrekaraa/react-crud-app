import React, {useState} from "react";
import { validateEmail } from "../../utils/methods";
import { Form, Input, Modal } from "antd";

const ModalBox = (props) => {
  const { showModal, setShowModal, user, users, setUsers } = props;
  const [newUserData, setNewUserData] = useState({ ...user });

  const handleFormChange = (changedValues, allValues) => {
    setNewUserData({ ...newUserData, ...changedValues });
  };

  const handleOk = () => {
    if (
      newUserData.name &&
      validateEmail(newUserData.email) &&
      newUserData.phone &&
      newUserData.website
    ) {
      setUsers([
        ...users.map((user) =>
          user.id === newUserData.id ? newUserData : user
        ),
      ]);
      setShowModal(false);
    }
  };
  return (
    <Modal
      title="Basic Modal"
      visible={showModal}
      onOk={handleOk}
      onCancel={() => setShowModal(false)}
    >
      <Form
        name="basic"
        onValuesChange={(changedValues, allValues) => {
          handleFormChange(changedValues, allValues);
        }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          initialValue={user?.name}
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          initialValue={user?.email}
          rules={[
            { required: true, message: "Please input your Email!" },
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          initialValue={user?.phone}
          rules={[{ required: true, message: "Please input your Phone!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Website Address"
          name="website"
          initialValue={user?.website}
          rules={[
            {
              required: true,
              message: "Please input your WebsiteAddress!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalBox;
