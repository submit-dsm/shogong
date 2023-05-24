import { checkboxFillImg, checkboxImg } from "@/assets/survey";
import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  type: "radio" | "checkbox";
  items: string[];
}

const Choice = ({ type, items }: Props) => {
  return (
    <ChoiceContainer>
      {items.map((item, i) => (
        <label key={item}>
          <input
            type={type}
            name="select"
            value={item}
            defaultChecked={type === "radio" && i === 0}
          />
          {item}
        </label>
      ))}
    </ChoiceContainer>
  );
};

const ChoiceContainer = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  > label {
    height: 22px;
    font: ${({ theme }) => theme.font.Body2};
    > input {
      appearance: none;
      margin-right: 8px;
      width: 22px;
      height: 22px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
  [type="radio"] {
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.gray500};
    :checked {
      color: ${({ theme }) => theme.color.main500};
      border: 1px solid ${({ theme }) => theme.color.main500};
      :after {
        content: "●";
        font: ${({ theme }) => theme.font.Body2};
      }
    }
  }
  [type="checkbox"] {
    background-image: url(${checkboxImg.src});
    :checked {
      background-image: url(${checkboxFillImg.src});
    }
  }
`;

export default Choice;
