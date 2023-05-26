import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "@emotion/styled";
import { CheckButton } from "@/components/survey/check-button";
import { ChangeEvent, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [state, setState] = useState<boolean>(false);
  return (
    <CheckButton
      type={"checkbox"}
      checked={state}
      id={"안녕"}
      onChange={function (e: ChangeEvent<HTMLInputElement>): void {
        setState(e.target.checked);
      }}
    />
  );
}

const Button = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.black};
`;
