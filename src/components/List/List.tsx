import * as S from "./List.styled";

type ListProps = {
  children: JSX.Element[];
  title: string;
};

export const List = ({ children, title }: ListProps) => (
  <S.Wrapper>
    <S.Header>{title}</S.Header>
    <S.List>{children}</S.List>
  </S.Wrapper>
);
