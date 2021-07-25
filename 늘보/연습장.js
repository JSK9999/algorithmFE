<<<<<<< HEAD
// 혼자 못 풀었음.
// 다른 사람의 풀이
function solution(record) {
  let answer = [];

  // 1. 2차원 배열 생성
  let temp = record.map((item) => item.split(' ')); // O(N^2)

  let nickNameSet = {}; // 생각한 분 대단..

  for (let i = 0; i < temp.length; i++) {
    // 핵심!!
    // key값을 uid로 맞추고 -> key값은 변화하지 않는다.
    // value값을 닉네임으로 -> 어차피 length === 3이면 Enter or Change만 나오기 때문에,
    // Change를 하더라도 key(uid)값이 변하지 않는다.
    // Leave이후 다른 닉네임으로 Enter하는 경우에도 key값은 변화하지 않기 때문에 상관없음.
    if (temp[i].length === 3) nickNameSet[temp[i][1]] = temp[i][2];
    // console.log('nickNameSet: ', nickNameSet);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i][0] === 'Enter') answer.push(`${nickNameSet[temp[i][1]]}님이 들어왔습니다.`);
    else if (temp[i][0] === 'Leave') answer.push(`${nickNameSet[temp[i][1]]}님이 나갔습니다.`);
  }

  return answer;
  // console.log('answer: ', answer);
}

record = ['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'];
solution(record);
=======
function solution(n, times) {
  times.sort((a, b) => a - b);

  let low = 0;
  let high = n * times[times.length - 1];
  let mid = 0;
  let sum = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    // 여기 mid 대신 high를 했었는데 계속 런타임 에러가 났음.
    sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    console.log('low: ', low);
    console.log('high: ', high);

    console.log(`sum:${sum}이 n:${n}보다 크거나 같나요? ${sum >= n}`);
    console.log('mid: ', mid);

    if (sum >= n) high = mid - 1;
    else if (sum < n) low = mid + 1;
  }
  return low;
}

let times = [7, 10]; // output: 21초
let n = 6;
solution(n, times);

// 다른 사람의 풀이
// var floor = (n) => Math.floor(n);

// function solution(n, times) {
//   var answer = 0;

//   return s(n, times);
// }
// function s(n, times) {
//   var min = 0,
//     max = n * Math.max.apply(null, times);
//   while (min <= max) {
//     var mid = floor((min + max) / 2);
//     var maxInMid = times.reduce((acc, cur) => (acc += floor(mid / cur)), 0);
//     if (n <= maxInMid) {
//       max = mid - 1;
//     } else {
//       min = mid + 1;
//     }
//   }
//   return min;
// }
>>>>>>> 늘보
