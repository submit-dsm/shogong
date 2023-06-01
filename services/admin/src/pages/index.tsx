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
