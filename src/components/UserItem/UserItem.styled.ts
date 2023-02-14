import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PostLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }
`;
