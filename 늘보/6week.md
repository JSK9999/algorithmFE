## 문자열의 앞, 뒤 공백을 없애보자

### //https://yeu.kr/4TWp0#js

```js
function solution(str) {
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") answer += str[i];
  }

  return answer;
}
```
