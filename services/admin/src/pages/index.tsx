import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "@emotion/styled";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Button></Button>;
}

const Button = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.black};
`;
