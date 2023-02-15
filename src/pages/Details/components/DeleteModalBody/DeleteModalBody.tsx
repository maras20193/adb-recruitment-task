import { useState } from "react";
import { toast } from "react-toastify";
import { deleteUser, getUsers } from "../../../../api/users";
import { Button } from "../../../../components";
import * as S from "./DeleteModalBody.styled";

export type DeleteModalBodyProps = {
  closeModal: () => void;
  user: User;
};

export const DeleteModalBody = ({ closeModal, user }: DeleteModalBodyProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteUser(user.id);
      await getUsers();
      closeModal();
      toast.success(`You successfuly deleted user: ${user.name}`);
    } catch {
      toast.error("Error has occured. Please try again later");
    }
    setIsLoading(false);
  };

  return (
    <S.Wrapper>
      <h2>Are you sure, you want delete this user?</h2>
      <S.ButtonsWrapper>
        <Button.Secondary onClick={closeModal}>Cancel</Button.Secondary>
        <Button.Primary
          onClick={handleDelete}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Delete
        </Button.Primary>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};
