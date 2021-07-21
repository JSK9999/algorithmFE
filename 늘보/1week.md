# Yeu: 토글을 구현해보자

### https://yeu.kr/xk94g#js

```javascript
let container = document.querySelector('#container');
let buttonElement = document.querySelector('#container > button');
let textColor = document.querySelector('#text');

let clicked = 0;

buttonElement.onclick = () => {
  if (clicked) {
    textColor.style.color = '#0000ff';
    clicked = 0;
  } else {
    textColor.style.color = '#ff0000';
    clicked = 1;
  }
};
```

# 프로그래머스: 오픈채팅방

### https://programmers.co.kr/learn/courses/30/lessons/42888

```javascript
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
```
