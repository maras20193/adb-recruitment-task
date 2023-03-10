import { deleteIcon, editIcon } from "../../../../assets";

import { UserModalsContainer } from "..";

import { useUsersModals } from "../../hooks/useUsersModals";
import { routes } from "../../../../utils/routes";
import { IconButton } from "../../../../components/IconButton/IconButton";
import * as S from "./UserItem.styled";

type UserItemProps = {
  user: User;
  extended?: boolean;
};

export const UserItem = ({ user, extended }: UserItemProps) => {
  const modals = useUsersModals();

  return (
    <S.ItemWrapper>
      <S.PostLink to={`${routes.posts}/${user.id}`}>{user.name}</S.PostLink>
      {extended ? (
        <>
          <S.IconsWrapper>
            <IconButton
              icon={editIcon}
              onClick={modals.edit.handleModalOpen}
              alt="edit"
            />
            <IconButton
              icon={deleteIcon}
              onClick={modals.delete.handleModalOpen}
              alt="delete"
            />
          </S.IconsWrapper>
          <UserModalsContainer modals={modals} user={user} />
        </>
      ) : null}
    </S.ItemWrapper>
  );
};
