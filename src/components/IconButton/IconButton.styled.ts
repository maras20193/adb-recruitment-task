import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
  }
`;
