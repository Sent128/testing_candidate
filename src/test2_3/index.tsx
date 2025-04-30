import dayjs from "dayjs"

const Test = () => {
  const date1 = dayjs('2025-01-20')
  const date2 = dayjs('2025-01-01')

  const findLongestUniqueSubstring = (str: string) => {
    let maxLength = 0;
    const charIndexMap: Record<string, number> = {};
    let start = 0;

    for (let end = 0; end < str.length; end++) {
      const currentChar: string = str[end];
      if (charIndexMap[currentChar] >= start) {
        start = charIndexMap[currentChar] + 1;
      }

      charIndexMap[currentChar] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
  };

  return (<>
    <p>Find the Number of Days Between Two Dates : </p>
    <p>Input: 01 01 2025 and 20 01 2025</p>
    <p>Output: {date1.diff(date2, "days")}</p>
    <hr />
    <p>Write a function that finds the length of the longest substring in a string where all characters are unique.</p>
    <p>Example Input: "abcxzabcbbx"</p>
    <p>Output: {findLongestUniqueSubstring("abcxzabcbbx")}</p>
  </>)
}

export default Test;