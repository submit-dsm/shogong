import { Table } from "./table";
import { CalendarButton } from "./button";
import { useState } from "react";
import { Layout } from "../layout";
export const Calendar = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <Layout text="마감날짜 선택">
        <div>
          <CalendarButton {...{ modal, setModal }} />
          <Table {...{ modal, setModal }} />
        </div>
      </Layout>
    </>
  );
};
