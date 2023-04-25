import Button from "@/components/common/Button";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Submit App</title>
      </Head>
      <Button disabled={false}>버튼</Button>
    </>
  );
}
