import { Button } from "../../../../components";
import * as S from "./DeleteModalBody.styled";

export const DeleteModalBody = () => (
  <S.Wrapper>
    <h2>Are you sure, you want delete this user?</h2>
    <S.ButtonsWrapper>
      <Button.Secondary>Cancel</Button.Secondary>
      <Button.Primary>Delete</Button.Primary>
    </S.ButtonsWrapper>
  </S.Wrapper>
);
