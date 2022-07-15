import Loading from "./components/ui/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "antd";

import UserCard from "./components/ui/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, [1500]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Row>
          {users.map((user) => {
            return (
              <UserCard
                key={user?.id}
                user={user}
                users={users}
                setUsers={setUsers}
              />
            );
          })}
        </Row>
      )}
    </>
  );
};

export default App;
