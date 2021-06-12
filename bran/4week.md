https://yeu.kr/yrXkP#js
```javascript
// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');


let btnElement = document.querySelector("button");
let numElement = document.querySelector("span");

let num = container.getElementsByTagName('span')[0].innerText;


 btnElement.addEventListener('click', addNum)

 function addNum () {
    num++;
    numElement.innerText = num
 }

```

https://programmers.co.kr/learn/courses/30/lessons/42748?fbclid=IwAR1Fuq9TldIXlXkehNDJR5GgLnXmo09MmFkW2SJsrO-bDre8m2CGcqDj7RA
```javascript

function solution(array, commands) {
  var answer = [];

  // expected result
  // [1,5,2,6,3,7,4]
  // 1st [2,5,3] => [5,2,6,3]       => [2,3,5,6]        => 5
  // 2nd [4,4,1] => [6]             => [6]              => 6
  // 3rd [1,7,3] => [1,5,2,6,3,7,4] => [1,2,3,4,5,6,7]  => 3

  let count = commands.length; // 3
  let i = 0;
  let j = 0;
  let k = 0;

  for (let z = 0; z < count; z++) {
    i = commands[z][0];
    j = commands[z][1];
    k = commands[z][2];

    let selectedArr = array.slice(i - 1, j).sort((a, b) => a - b); // sort arr in order
    // let preAnswer = selectedArr[k-1]; // each return's el

    answer.push(selectedArr[k - 1]); // insert each el
    // console.log(selectedArr[k-1]) // 5, 6, 3
  }

  return answer;
}

```
