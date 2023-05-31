import styled from "@emotion/styled";

export interface IButtonProps {
  onClick: () => void;
  value: string;
}
export const Button = ({ value, ...props }: IButtonProps) => {
  return (
    <>
      <_Button {...props}>{value}</_Button>
    </>
  );
};
const _Button = styled.div`
  height: 50px;
  cursor: pointer;
  line-height: 50px;
  text-align: center;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray700};
  :hover {
    background-color: ${({ theme }) => theme.color.gray500};
  }
`;
