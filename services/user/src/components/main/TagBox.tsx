import styled from "@emotion/styled";

interface Props {
  tagArr: string[];
}

const TagBox = ({ tagArr }: Props) => {
  return (
    <TagWrapper>
      {tagArr.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </TagWrapper>
  );
};

const TagWrapper = styled.div`
  display: flex;
  gap: 4px 8px;
  flex-wrap: wrap;
  > span {
    padding: 4px 12px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.main500};
    color: ${({ theme }) => theme.color.white};
    white-space: nowrap;
    font: ${({ theme }) => theme.font.Caption};
  }
`;

export default TagBox;
