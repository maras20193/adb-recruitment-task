import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.h1`
  font-size: 26px;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  letter-spacing: 0.1rem;
`;
