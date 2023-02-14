import { deleteIcon, editIcon } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import * as S from "./UserItem.styled";

type UserItemProps = {
  user: User;
  extended?: boolean;
};

export const UserItem = ({ user, extended }: UserItemProps) => {
  const handleClick = () => {
    console.log("test");
  };
  return (
    <S.ItemWrapper>
      <p>{user.name}</p>
      {extended ? (
        <S.IconsWrapper>
          <IconButton icon={editIcon} onClick={handleClick} alt="edit" />
          <IconButton icon={deleteIcon} onClick={handleClick} alt="delete" />
        </S.IconsWrapper>
      ) : null}
    </S.ItemWrapper>
  );
};
