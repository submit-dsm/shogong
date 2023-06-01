import { useFormActions } from "@/hook/context/form/useFormAction";
import styled from "@emotion/styled";

export const AddButton = () => {
  const dispatch = useFormActions();
  return (
    <>
      <_Svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        <path d="M28 14C26.46 14 25.2 15.26 25.2 16.8V25.2H16.8C15.26 25.2 14 26.46 14 28C14 29.54 15.26 30.8 16.8 30.8H25.2V39.2C25.2 40.74 26.46 42 28 42C29.54 42 30.8 40.74 30.8 39.2V30.8H39.2C40.74 30.8 42 29.54 42 28C42 26.46 40.74 25.2 39.2 25.2H30.8V16.8C30.8 15.26 29.54 14 28 14ZM28 0C12.544 0 0 12.544 0 28C0 43.456 12.544 56 28 56C43.456 56 56 43.456 56 28C56 12.544 43.456 0 28 0ZM28 50.4C15.652 50.4 5.6 40.348 5.6 28C5.6 15.652 15.652 5.6 28 5.6C40.348 5.6 50.4 15.652 50.4 28C50.4 40.348 40.348 50.4 28 50.4Z" />
      </_Svg>
    </>
  );
};
const _Svg = styled.svg`
  cursor: pointer;
  > path {
    fill: ${({ theme }) => theme.color.main500};
  }

  :hover {
    > path {
      fill: ${({ theme }) => theme.color.main100};
    }
  }
`;
