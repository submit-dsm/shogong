import styled from "@emotion/styled";
import { useState, ChangeEvent } from "react";

const FileUpload = () => {
  const [filename, setFilename] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    files ? setFilename(files[0].name) : setFilename("");
  };

  return (
    <FileUploadContainer>
      <input
        className="file-name"
        value={filename || "파일을 선택해주세요."}
        disabled
      />
      <label htmlFor="file">업로드</label>
      <input
        className="hidden"
        id="file"
        type="file"
        onChange={handleFileChange}
      />
    </FileUploadContainer>
  );
};

const FileUploadContainer = styled.div`
  margin-top: 20px;
  .hidden {
    display: none;
  }
  .file-name {
    padding: 8px 16px;
    border: 1px solid ${({ theme }) => theme.color.gray500};
    font: ${({ theme }) => theme.font.Body2};
    border-radius: 4px;
    margin-right: 8px;
  }
  > label {
    padding: 8px 16px;
    border-radius: 4px;
    font: ${({ theme }) => theme.font.Body2};
    background-color: ${({ theme }) => theme.color.main500};
    color: ${({ theme }) => theme.color.white};
  }
`;

export default FileUpload;
