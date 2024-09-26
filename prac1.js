function solution(s) {
  var answer = "";
  const numArr = s.split(" ").map((e) => Number(e));
  const min = Math.min(...numArr);
  const max = Math.max(...numArr);
  answer += String(min) + " " + String(max);
  return answer;
}
