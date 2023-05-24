import styled from "@emotion/styled";
import TagBox from "./TagBox";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  time: number;
  tagArr: string[];
}

const Post = ({ title, time, tagArr, id }: Props) => {
  return (
    <PostContainer>
      <Link href={"/survey/" + id}>
        <h1>{title}</h1>
        <p>남은 시간 {time}</p>
        <TagBox tagArr={tagArr} />
      </Link>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  > a {
    width: calc(100vw - 32px);
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.color.gray500};
    text-decoration: none !important;
    > h1 {
      font: ${({ theme }) => theme.font.Body1};
      color: ${({ theme }) => theme.color.black};
    }
    > p {
      font: ${({ theme }) => theme.font.Caption};
      color: ${({ theme }) => theme.color.gray700};
    }
  }
`;

export default Post;
