import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUsers } from "../../api/users";
import { Button, List, Loader, Modal, UserItem } from "../../components";
import { useModal } from "../../hooks";
import { AddModalBody } from "./components";
import * as S from "./Details.styled";

export const Details = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

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
      <List title="Manage users">
        {users.map((user) => (
          <UserItem key={user.name} user={user} extended />
        ))}
      </List>
      {isLoading && <Loader />}
      <Button.Primary onClick={handleModalOpen}>Add new User</Button.Primary>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Add new user"
      >
        <AddModalBody closeModal={handleModalClose} />
      </Modal>
    </S.Wrapper>
  );
};
