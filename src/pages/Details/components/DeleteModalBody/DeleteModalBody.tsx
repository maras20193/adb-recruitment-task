import { useState } from "react";
import { toast } from "react-toastify";
import { deleteUser, getUsers } from "../../../../api/users";
import { Button } from "../../../../components";
import * as S from "./DeleteModalBody.styled";

export type DeleteModalBodyProps = {
  closeModal: () => void;
  userId: number;
};

export const DeleteModalBody = ({
  closeModal,
  userId,
}: DeleteModalBodyProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteUser(userId);
      await getUsers();
      closeModal();
      toast.error(`You successfuly deleted user: ${userId}`);
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
