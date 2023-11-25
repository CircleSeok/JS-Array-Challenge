// write your codes
//홀수만 뽑아 배열로 만드세요
function solution(inputArray) {
  return inputArray.filter((el) => el % 2 !== 0);
}

exports.solution = solution;
