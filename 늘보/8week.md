## 뒤집어보자

### https://yeu.kr/rpreC#js

```js
function solution(style) {
  let pinkbox = document.querySelector('#result');
  // pinkbox.style['color'] = 'red';
  style(`
      #result {
         color: red;
         transform: rotate(180deg);
      }
   `);
}
```

## 크레인 인형 뽑기

### https://programmers.co.kr/learn/courses/30/lessons/64061

```js
function solution(board, moves) {
  let choicesCount = 0;
  let stack = [];
  let point = 0;
  // 1. 처음에는 moves.length 기준으로 반복문을 돌고
  for (let i = 0; i < moves.length; i++) {
    // 2. 두번째 반복문에서는 board.length를 기준으로 돌면서
    // moves[i]에 해당되는 열 숫자들을 모두 검사한다.
    for (let j = 0; j < board.length; j++) {
      // 3. choicesCount 변수를 사용해서 중복 선택을 막는다.
      if (board[j][moves[i] - 1] !== 0) {
        // 겹칠때는 없애기
        if (stack[stack.length - 1] === board[j][moves[i] - 1]) {
          stack.pop();
          point += 2;
          // 안 겹치면 그대로 넣기
        } else stack.push(board[j][moves[i] - 1]);

        // stack 배열에 넣었으면 해당 칸은 빈칸(=0)이 되어야 한다.
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return point;
}
```
