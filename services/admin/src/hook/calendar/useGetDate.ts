export interface getDateProps {
  first: { nowDate: number; isBefore: boolean }[];
  middle: { nowDate: number; isBefore: boolean }[][];
  last: { nowDate: number; isBefore: boolean }[];
}
export const getDate = (year: number, month: number): getDateProps => {
  const firstWeek = 7 - new Date(year, month, 1).getDay();
  const lastWeek = new Date(year, month + 1, 0).getDay() + 1;
  const ThisLastDate = new Date(year, month + 1, 0).getDate();
  const now = new Date();
  let cnt = 0;
  const tmp = Math.floor((ThisLastDate - firstWeek - lastWeek) / 7);

  let first: { nowDate: number; isBefore: boolean }[] = new Array(
    firstWeek
  ).fill({ nowDate: 0, isBefore: false });
  let middle: { nowDate: number; isBefore: boolean }[][] = new Array(tmp).fill(
    new Array(7).fill({ nowDate: 0, isBefore: false })
  );
  let last: { nowDate: number; isBefore: boolean }[] = new Array(lastWeek).fill(
    {
      nowDate: 0,
      isBefore: false,
    }
  );
  first = first.map(() => {
    cnt++;
    return {
      nowDate: cnt,
      isBefore: new Date(`${year}-${month + 1}-${cnt}`) < now,
    };
  });
  middle = middle.map((e) =>
    e.map(() => {
      cnt++;
      return {
        nowDate: cnt,
        isBefore: new Date(`${year}-${month + 1}-${cnt}`) < now,
      };
    })
  );
  last = last.map(() => {
    cnt++;
    return {
      nowDate: cnt,
      isBefore: new Date(`${year}-${month + 1}-${cnt}`) < now,
    };
  });
  return { first, middle, last };
};
