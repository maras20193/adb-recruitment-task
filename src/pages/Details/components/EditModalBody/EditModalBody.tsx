import { Button, Input } from "../../../../components";
import * as S from "./EditModalBody.styled";

export const EditModalBody = () => (
  <S.Wrapper>
    <h2>You can change user name.</h2>
    <Input label="Name: " />
    <Button.Primary style={{ width: "150px" }}>Save</Button.Primary>
  </S.Wrapper>
);
