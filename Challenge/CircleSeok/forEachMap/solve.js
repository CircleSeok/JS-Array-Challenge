// write your codes
function solution(inputArray) {
  const Array = [];
  inputArray.forEach((el) => {
    Array.push(el + '%');
  });
  return Array;
}

exports.solution = solution;
