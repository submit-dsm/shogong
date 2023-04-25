import styled from "@emotion/styled";

interface Props {
  children: string;
  disabled: boolean;
}

const Button = ({ children, disabled }: Props) => {
  return <ButtonWrapper disabled={disabled}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button<{ disabled: boolean }>`
  border-radius: 12px;
  color: ${(prop) => {
    console.log(prop.theme);
    return "#fff";
  }};
`;

export default Button;
