import React, { forwardRef } from "react";
import * as S from "./Input.styled";

type InputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<
  HTMLInputElement,
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
>(({ label, error, ...rest }, ref) => (
  <S.Wrapper>
    <label htmlFor={label}>{label}</label>
    <S.Input ref={ref} id={label} {...rest} />
    <S.Error>{error}</S.Error>
  </S.Wrapper>
));
