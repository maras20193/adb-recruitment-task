import { deleteIcon, editIcon } from "../../assets";
import { routes } from "../../utils/routes";
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
      <S.PostLink to={`${routes.posts}/${user.id}`}>{user.name}</S.PostLink>
      {extended ? (
        <S.IconsWrapper>
          <IconButton icon={editIcon} onClick={handleClick} alt="edit" />
          <IconButton icon={deleteIcon} onClick={handleClick} alt="delete" />
        </S.IconsWrapper>
      ) : null}
    </S.ItemWrapper>
  );
};
