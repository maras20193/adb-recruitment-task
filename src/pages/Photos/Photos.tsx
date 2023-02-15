import { fadeVariant } from "../../animations";
import * as S from "./Photos.styled";

export const Photos = () => (
  <S.Wrapper animate="onscreen" initial="offscreen" variants={fadeVariant}>
    Photos
  </S.Wrapper>
);
