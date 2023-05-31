import React, { memo } from "react";
import { BlockType } from "@package/api-type";
export interface ISelectTableProps {
  onClick: (item: BlockType) => void;
  list: { [Key in BlockType]: string };
}

export const SelectTable = memo(({ onClick, list }: ISelectTableProps) => {
  return (
    <>
      {Object.entries(list).map((user) => (
        <div onMouseDown={() => onClick(user[0] as BlockType)} key={user[0]}>
          {user[1]}
        </div>
      ))}
    </>
  );
});
