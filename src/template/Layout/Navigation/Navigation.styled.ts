import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  gap: 20px;
  padding: 14px 40px;
  position: fixed;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.bgc};
`;

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: row;

  font-size: 18px;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  padding: 10px 4px;
  overflow: hidden;
  transition: 0.3s;

  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    bottom: 0;
    left: -100%;
    transition: 0.3s;
  }

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    ::after {
      left: 0;
    }
  }
`;

export const IconLink = styled(NavLink)`
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &.active {
    opacity: 0.7;
  }

  img {
    width: 100%;
  }
`;
