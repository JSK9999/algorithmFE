const ranNum = Math.floor(Math.random() * 10 + 1);
const str = 'hello';

function solution(inja1, inja2) {
  let answer = inja2;

  for (let i = 0; i < inja1 - 1; i++) {
    answer += ' ' + inja2;
  }
  return answer;
}

let result = solution(ranNum, 'hello');
console.log(result);
