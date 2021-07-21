# Yeu https://yeu.kr/WiwYF#html

```javascript
// 모르겟네요 ㅠ
```

# 프로그래머스 https://programmers.co.kr/learn/courses/30/lessons/42839?fbclid=IwAR03VrZ7kVVx8aFvOPCHIXwSdZGM3E_iWHnMwTTgUd3UFw8pLZ72x5HaYqU

```javascript
function solution(numbers) {
  let answer = 0;
  let primeNumbers = [];

  const numbersArr = numbers.split(""); // 숫자 분리 시키고

  // 소수 확인
  const isPrime = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
      if (count >= 3) break;
    }
    // 카운트에 숫자가 2개 이고 그 숫자가 빈 object이면, 숫자를 넣기
    if (count === 2 && !primeNumbers.includes(num)) {
      primeNumbers.push(num);
    }
  };

  // 숫자 만들기
  const mergeNumbers = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr];
        temp.splice(i, 1);
        mergeNumbers(temp, str + arr[i]);
      }
    }

    if (str.length > 0) {
      isPrime(+str);
    }
  };

  mergeNumbers(numbersArr, "");
  answer = primeNumbers.length;
  return answer;
}
```
