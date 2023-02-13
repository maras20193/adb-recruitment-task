import { avatar } from "../../../assets";
import { routes } from "../../../utils/routes";
import * as S from "./Navigation.styled";

export const Navigation = () => (
  <S.Wrapper>
    <S.Link to={routes.users}>Users</S.Link>
    <S.Link to={routes.posts}>Posts</S.Link>
    <S.Link to={routes.photos}>Photos</S.Link>
    <S.IconLink to={routes.details}>
      <img src={avatar} alt="avatar" />
    </S.IconLink>
  </S.Wrapper>
);
