import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bgc};
  text-transform: uppercase;
  padding: 20px;
`;
