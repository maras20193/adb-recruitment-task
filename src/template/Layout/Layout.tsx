import { Navigation } from "./Navigation/Navigation";
import * as S from "./Layout.styled";
import { Footer } from "./Footer/Footer";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <Navigation />
    <S.Content>{children}</S.Content>
    <Footer />
  </S.Wrapper>
);
