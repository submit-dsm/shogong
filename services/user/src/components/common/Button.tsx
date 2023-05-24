import styled from "@emotion/styled";

interface Props {
  disabled: boolean;
  children: string;
  onClick: () => void;
}

const Button = ({ disabled, children, onClick }: Props) => {
  return (
    <CommonButton disabled={disabled} onClick={onClick}>
      {children}
    </CommonButton>
  );
};

const CommonButton = styled.button<{ disabled: boolean }>`
  width: calc(100vw - 32px);
  height: 52px;
  border-radius: 12px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.main100 : theme.color.main500};
  border: none;
  font: ${({ theme }) => theme.font.Body1};
`;

export default Button;
