import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fadeVariant } from "../../animations";
import { getUsers } from "../../api/users";
import { List, Loader } from "../../components";
import { UserItem } from "../Details/components";
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
    <S.Wrapper animate="onscreen" initial="offscreen" variants={fadeVariant}>
      <List title="Users List">
        {users.map((user) => (
          <UserItem key={user.name} user={user} />
        ))}
      </List>
      {isLoading && <Loader />}
    </S.Wrapper>
  );
};
