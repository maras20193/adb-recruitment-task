import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUsers } from "../../api/users";
import { List, Loader, UserItem } from "../../components";
import * as S from "./Users.styled";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await getUsers();
      setUsers(response.data);
    } catch (err) {
      toast.error("Error has occurred, please try again later.");
    }
    setIsLoading(false);
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
      {isLoading && <Loader />}
    </S.Wrapper>
  );
};
