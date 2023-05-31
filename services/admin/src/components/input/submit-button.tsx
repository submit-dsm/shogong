import styled from "@emotion/styled";

export interface ISubmitButtonProps {
  value: string;
  onClick: () => void;
}

export const SubmitButton = (props: ISubmitButtonProps) => {
  return (
    <>
      <_Submit type="submit" {...props} />
    </>
  );
};

const _Submit = styled.input`
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.color.main300};
  color: ${({ theme }) => theme.color.white};

  font: ${({ theme }) => theme.font.Body3};
  border: none;

  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.main100};
  }
`;
