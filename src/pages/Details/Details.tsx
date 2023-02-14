import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import { List, Modal, UserItem } from "../../components";
import { useModal } from "../../hooks";
import { AddModalBody } from "./components";
import * as S from "./Details.styled";

export const Details = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

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
          <UserItem key={user.name} user={user} extended />
        ))}
      </List>
      <button type="button" onClick={handleModalOpen}>
        Add new User
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Add new user"
      >
        <AddModalBody />
      </Modal>
    </S.Wrapper>
  );
};
