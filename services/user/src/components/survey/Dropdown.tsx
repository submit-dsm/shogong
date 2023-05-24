import { dropdownArrow } from "@/assets/survey";
import useDetectClose from "@/hooks/useDetectClose";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

interface Props {
  items: string[];
}

const Dropdown = ({ items }: Props) => {
  const dropDownRef = useRef(null);
  const [value, setValue] = useState<string>(items[0]);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  const onClickItem = (item: string) => {
    setValue(item);
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer ref={dropDownRef}>
      <input onClick={() => setIsOpen(!isOpen)} type="button" value={value} />
      {isOpen && (
        <ul>
          {items.map((item) => (
            <li key={item} onClick={() => onClickItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  > input {
    border: none;
    border-radius: 20px;
    padding: 6px 28px 6px 12px;
    font: ${({ theme }) => theme.font.Body4};
    background: no-repeat calc(100% - 12px) center url(${dropdownArrow.src});
    background-color: ${({ theme }) => theme.color.gray300};
  }
  > ul {
    min-width: 106px;
    width: fit-content;
    margin-top: 8px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    > li {
      width: fit-content;
      font: ${({ theme }) => theme.font.Body4};
    }
  }
`;

export default Dropdown;
