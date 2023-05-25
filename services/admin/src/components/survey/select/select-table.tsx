import React, { memo } from "react";
import { BlockType } from "@package/api-type";
export interface ISelectTableProps {
  onClick: (item: string) => void;
  list: { [Key in BlockType]: string };
}

export const SelectTable = memo(({ onClick, list }: ISelectTableProps) => {
  return (
    <>
      {Object.entries(list).map((user) => (
        <div onMouseDown={() => onClick(user[0])} key={user[0]}>
          {user[1]}
        </div>
      ))}
    </>
  );
});
