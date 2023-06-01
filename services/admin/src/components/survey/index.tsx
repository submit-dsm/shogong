import { BlockType } from "@package/api-type";
import { TitleInput } from "./title";
import { Select } from "./select";
import { SelectTable } from "./select/select-table";
import { ChangeEvent, useMemo, useState } from "react";
import { useFormValue } from "@/hook/context/form/useFormValue";
import { useFormActions } from "@/hook/context/form/useFormAction";
import { IsOption } from "./option";
import styled from "@emotion/styled";
export interface ISurveyListProps {
  idx: number;
}
export const SurveyList = () => {
  const { blocks } = useFormValue();
  const dispatch = useFormActions();
  const [state, setState] = useState<{ start: number; end: number }>({
    start: 0,
    end: 0,
  });
  const data: { [key in BlockType]: string } = useMemo(
    () => ({
      SHORT_ANSWER: "단답형",
      LONG_ANSWER: "서술형",
      FILE: "파일 입력",
      CHECKBOX: "다중 선택",
      RADIO: "단일 선택",
      DROP_DOWN: "드롭다운",
    }),
    []
  );

  return (
    <>
      <_Ul>
        {blocks.map((item, idx) => (
          <>
            <_Li
              key={`adsdsaderwem${idx}`}
              onDragStart={() => setState((prev) => ({ ...prev, start: idx }))}
              onDragOver={() => {
                setState((prev) => ({
                  ...prev,
                  end: state.start >= idx ? idx : idx + 1,
                }));
              }}
              onDragLeave={() => {}}
              onDragEnd={() => dispatch({ type: "DRAG", ...state })}
              draggable
            >
              <Select now={data[item.type]}>
                <SelectTable
                  onClick={(block: BlockType) => {
                    dispatch({ type: "INDEX", idx });
                    dispatch({ type: "CHANGE", block });
                  }}
                  list={data}
                />
              </Select>
              <TitleInput
                onInput={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch({ type: "WRITE", question: e.target.value });
                }}
              />
              <IsOption
                type={item.type}
                question={item.questionParams}
                index={idx}
              />
              <div
                onClick={() => {
                  dispatch({ type: "DELETE", idx });
                }}
              >
                X
              </div>
            </_Li>
          </>
        ))}
      </_Ul>
    </>
  );
};
const _Ul = styled.ul`
  height: max-content;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const _Li = styled.li`
  position: relative;

  display: flex;
  gap: 20px;
  flex-direction: column;

  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray500};

  > div {
    :last-child {
      position: absolute;
      visibility: hidden;
      right: 10px;
    }
  }

  :hover {
    border-color: ${({ theme }) => theme.color.black};

    > div {
      :last-child {
        cursor: pointer;
        visibility: visible;
        color: ${({ theme }) => theme.color.main300};

        :hover {
          color: ${({ theme }) => theme.color.main500};
        }
      }
    }
  }
  :active {
    transform: scale(1);
    border-color: ${({ theme }) => theme.color.main500};
  }
`;
