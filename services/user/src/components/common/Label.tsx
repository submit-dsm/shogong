import styled from "@emotion/styled";

interface Props {
  isRequired: boolean;
  children: string;
}

const Label = ({ isRequired, children }: Props) => {
  return <LabelContainer isRequired={isRequired}>{children}</LabelContainer>;
};

const LabelContainer = styled.label<{ isRequired: boolean }>`
  margin-bottom: 8px;
  :after {
    content: "${({ isRequired }) => isRequired && "*"}";
    color: ${({ theme }) => theme.color.main500};
  }
`;

export default Label;
