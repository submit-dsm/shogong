import styled from "@emotion/styled";
import { useState } from "react";
import { Select } from "@/components/survey/select";
import { SelectTable } from "@/components/survey/select/select-table";
import { BlockType } from "@package/api-type";

export default function Home() {
  const [state, setState] = useState<string>("단답형");
  const data: { [key in BlockType]: string } = {
    SHORT_ANSWER: "단답형",
    LONG_ANSWER: "서술형",
    FILE: "파일 입력",
    CHECKBOX: "다증선택",
    RADIO: "단일선택",
  };
  return (
    <Button>
      <Select now={state}>
        <SelectTable
          onClick={function (item: BlockType): void {
            setState(data[item]);
          }}
          list={data}
        />
      </Select>
    </Button>
  );
}

const Button = styled.div`
  position: relative;
  top: 20px;
  left: 20px;
`;
