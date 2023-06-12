import styled from "@emotion/styled";
import { Form } from "@/components/form";
import { FormContextProvider } from "@/hook/context";
import { AddButton } from "@/assets/add-button";

export default function Home() {
  return (
    <FormContextProvider>
      <_Layout>
        <Form />
        <AddButton />
        <_Button>
          <div>완료</div>
        </_Button>
      </_Layout>
    </FormContextProvider>
  );
}

const _Layout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const _Button = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.main700};
    font: ${({ theme }) => theme.font.Body3};
    line-height: 40px;
    text-align: center;
    :hover {
      background: ${({ theme }) => theme.color.main500};
    }
  }
`;
