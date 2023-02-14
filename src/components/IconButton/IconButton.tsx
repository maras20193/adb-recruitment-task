import * as S from "./IconButton.styled";

type IconButtonProps = {
  icon: string;
  onClick: () => void;
  alt: string;
};

export const IconButton = ({ icon, onClick, alt }: IconButtonProps) => (
  <S.Button type="button" onClick={onClick}>
    <img src={icon} alt={alt} />
  </S.Button>
);
