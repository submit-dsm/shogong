import styled from "@emotion/styled";

export const Modal = () => {
  return (
    <>
      <_Table>
        <_Input>
          <input type="text" />
        </_Input>
      </_Table>
    </>
  );
};
const _Input = styled.div`
  width: 325px;
  height: 40px;

  display: flex;
  > input {
    flex-grow: 1;
  }
`;
const _Table = styled.div`
  width: 400px;
  height: 500px;
`;
