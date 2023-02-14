import styled from "styled-components";

type ButtonProps = {
  isLoading?: boolean;
};

const BasicButton = styled.button<ButtonProps>`
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 100%;

  text-indent: ${({ isLoading }) => (isLoading ? "-9000px" : "0")};
  position: relative;

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }

  &::after {
    content: "";
    display: ${({ isLoading }) => (isLoading ? "inline-block" : "none")};
    position: absolute;
    width: 18px;
    height: 18px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: ${({ isLoading }) => (isLoading ? "3px solid" : "none")};
    border-radius: 50%;
    border-top-color: transparent;
    animation: button-loading-spinner 1s ease infinite;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const Primary = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bgc};
`;
const Secondary = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.bgc};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = { Primary, Secondary };
