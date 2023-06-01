import { useFormActions } from "@/hook/context/form/useFormAction";
import styled from "@emotion/styled";
import { BlockType } from "@package/api-type";
import { ChangeEvent, memo, useState, KeyboardEvent } from "react";

export const IsOption = memo(
  ({
    type,
    question,
    index,
  }: {
    type: BlockType;
    question?: string[];
    index: number;
  }) => {
    const dispatch = useFormActions();
    const [state, setState] = useState<string>("");
    const createSurvey = (idx: number) => {
      dispatch({ type: "INDEX", idx });
      dispatch({
        type: "ADD_OPTIONS",
        question: state,
      });
      setState("");
    };
    switch (type) {
      case "CHECKBOX":
      case "DROP_DOWN":
      case "RADIO":
        return (
          <_Ul>
            {question?.map((value, idx) => (
              <_Li key={"amkmckdmcl" + idx}>
                <_Input
                  type="text"
                  {...{ value }}
                  onInput={(e: ChangeEvent<HTMLInputElement>) => {
                    dispatch({
                      type: "CHANGE_OPTIONS",
                      idx,
                      question: e.target.value,
                    });
                  }}
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (
                      (value === "" &&
                        (e.key === "Enter" || e.key === "Backspace")) ||
                      (value.length === 1 &&
                        e.key === "Backspace" &&
                        idx === question.length - 1)
                    ) {
                      dispatch({ type: "DELETE_OPTIONS", idx });
                    }
                  }}
                  onFocus={() => {
                    dispatch({ type: "INDEX", idx: index });
                  }}
                  placeholder="Backspace나 Enter키를 누르면 삭제됩니다."
                />
              </_Li>
            ))}
            <_Li>
              <_Input
                type="text"
                key={"asdfwewer23ref"}
                placeholder="원하는 옵션을 입력해주세요."
                onInput={(e: ChangeEvent<HTMLInputElement>) => {
                  setState(e.target.value);
                }}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                  if (
                    state !== "" &&
                    e.key === "Enter" &&
                    !e.nativeEvent.isComposing
                  ) {
                    createSurvey(index);
                  }
                }}
                onBlur={() => {
                  if (state !== "") {
                    createSurvey(index);
                  }
                }}
                value={state}
              />
            </_Li>
          </_Ul>
        );
      default:
        return <></>;
    }
  }
);
const _Ul = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const _Li = styled.li`
  list-style: none;
`;
const _Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 10px;

  outline: none;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  border-radius: 5px;
  :focus {
    border-color: ${({ theme }) => theme.color.gray900};
  }

  font: ${({ theme }) => theme.font.Body4};
  color: ${({ theme }) => theme.color.black};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray700};
  }
`;
