import PageContainer from "@/components/result/PageContaner";
import {
  _Table,
  _TableHead,
  _TableCell,
  _TableRow,
  _TableBody,
} from "@/components/result/Table";
import styled from "@emotion/styled";

const ResultPage = () => {
  const columns = ["제목", "참여학생군", "익명여부", "날짜"];
  const cellSize = [
    "minmax(180px, 2fr)",
    "minmax(80px, 1fr)",
    "minmax(60px, 0.5fr)",
    "minmax(180px, 1.5fr)",
  ];

  return (
    <PageContainer title="설문조사 결과 확인">
      <_StyledTable>
        <_TableHead>
          <_TableRow cellSizes={cellSize} style={{ padding: "14px 20px" }}>
            {columns.map((column, i) => (
              <_TableCell key={i} scope="col" justify="center" align="center">
                <p>{column}</p>
              </_TableCell>
            ))}
          </_TableRow>
        </_TableHead>
        {/* <TableBody></TableBody> */}
      </_StyledTable>
    </PageContainer>
  );
};

const _StyledTable = styled(_Table)`
  margin-top: 20px;
`;

export default ResultPage;
