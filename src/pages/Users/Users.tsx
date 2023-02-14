import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import { List, UserItem } from "../../components";
import * as S from "./Users.styled";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (err) {
      console.log("ERRORR");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <S.Wrapper>
      <List title="Users List">
        {users.map((user) => (
          <UserItem key={user.name} user={user} />
        ))}
      </List>
    </S.Wrapper>
  );
};
