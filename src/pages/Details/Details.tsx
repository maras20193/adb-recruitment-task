import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import { List, UserItem } from "../../components";
import * as S from "./Details.styled";

export const Details = () => {
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
      <List title="Manage users">
        {users.map((user) => (
          <UserItem user={user} extended />
        ))}
      </List>
    </S.Wrapper>
  );
};
