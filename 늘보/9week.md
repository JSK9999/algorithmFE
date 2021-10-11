## 모의고사

### https://programmers.co.kr/learn/courses/30/lessons/42840?fbclid=IwAR1kDG5m6VaXMLIKK0-rMF3iXsHraWKeiTZBvWI1_gIh2PNl7I1iqz4rMGI

```js
const solution = answers => {
  const arr1 = [1, 2, 3, 4, 5]; // length = 5

  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5]; // length = 8

  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // length = 10

  const count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (arr1[i % 5] === answers[i]) count[0]++;
    if (arr2[i % 8] === answers[i]) count[1]++;
    if (arr3[i % 10] === answers[i]) count[2]++;
  }

  let max = Math.max(...count);
  let result = [];
  for (let j = 0; j <= count.length; j++) {
    if (count[j] === max) result.push(j + 1);
  }
  return result;
};
```

## 반복자(Iterator)를 만들어보자

### https://yeu.kr/6LfrS#js

```js
function solution(classname, list) {
   
}
```
