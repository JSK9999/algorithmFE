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
