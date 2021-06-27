# Yeu: 클릭 이벤트를 붙여보자

### https://yeu.kr/vXe4V#js

```javascript
let container = document.querySelector('#container');
let button = document.querySelector('#container > button');
let number = document.querySelector('#container > span');
let num = number.innerText;

button.addEventListener('click', function (e) {
  num++;
  number.innerText = num; // ?? 왜?
});
```

# 프로그래머스: 조이스틱

### https://programmers.co.kr/learn/courses/30/lessons/42860

```javascript
// 아직 이해 못했음.
function solution(name) {
  var answer = 0;
  var exp = name.length - 1;
  var z = 'Z'.charCodeAt(0);
  var a = 'A'.charCodeAt(0);
  for (var i = 0; i < name.length; i++) {
    var c = name[i].charCodeAt(0);
    answer = answer + z - c + 1 > c - a ? c - a : z - c + 1; // ?? 무슨 뜻인지
    if (c == a) {
      var nextIdx = i + 1;
      var countA = 0;
      while (nextIdx < name.length && name.charAt(nextIdx) == 'A') {
        countA++;
        nextIdx++;
      }
      var tmp = (name.charAt(0) == 'A' ? 0 : (i - 1) * 2) + (name.length - (1 + i + countA));
      if (exp > tmp) exp = tmp;
    }
  }
  answer += exp;
  return answer;
}
```
