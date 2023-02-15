import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Input = styled.input`
  height: 26px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  outline: none;
  padding: 2px 6px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Error = styled.p`
  font-size: 14px;
  color: red;
`;
