# Yeu: Array와 Object를 사용해보자

### https://yeu.kr/rDFKX#js

```js
function solution(object, path) {
  return path.reduce((obj, path) => obj[path] || '', object) || undefined;
}
```

# 프로그래머스: 프린터

### https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

```js
const solution = (priorities, location) => {
  let first_doc = 0;
  let answer = 1;

  while (priorities.length > 0) {
    // 먼저 first_doc을 기준으로 나눈다.

    // 1. 인쇄 대기목록의 가장 앞에 있는 문서를 priorities에서 꺼냅니다.
    first_doc = priorities.shift();

    // 2.  나머지 인쇄 대기목록에서 first_doc보다
    // 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
    if (priorities.some((item, i) => item > first_doc)) {
      priorities.push(first_doc);
    }

    // 그게 아니고 first_doc이 가장 우선순위가 높은 경우
    else {
      // 1. first_doc이 우선순위가 가장 높은데
      // 그 first_doc이 사용자가 선택한 문서인 경우
      if (location === 0) {
        return answer;
      }

      // 2. first_doc이 우선순위가 가장 높은데
      // 그 first_doc이 사용자가 선택한 문서가 아닌 경우
      else {
        answer++;
      }
    }

    // 이후 사용자가 선택한 문서를 기준으로 나눈다.

    // 사용자가 선택한 문서의 인덱스가 0인데 중요도가 제일 높은게 아닐 경우
    // 인덱스 옮기기
    if (location === 0) location = priorities.length - 1;
    // 사용자가 선택한 문서의 인덱스가 0이 아닌데 중요도가 제일 높은게 아닐 경우
    else location--;
  }
  return answer;
};
```
