import { Button, Input } from "../../../../components";
import * as S from "./AddModalBody.styled";

export const AddModalBody = () => (
  <S.Wrapper>
    <h2>You can add new user</h2>
    <Input label="Name: " />
    <Button.Primary style={{ width: "200px" }}>Add new user</Button.Primary>
  </S.Wrapper>
);
