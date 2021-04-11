# 프로그래머스

```javascript 
function solution(s) {
    let resultArray ;
    const wordArray = s.split("");
    //0으로 나눴을때 0이면 짝수 아니면 홀수
    wordArray.length %2 === 1 ? resultArray = wordArray.slice(wordArray.length/2,wordArray.length/2 +1) 
    :resultArray = wordArray.slice(wordArray.length/2-1 ,wordArray.length/2 +1)
    
    const answer = resultArray.join('')
    return answer;
}
```
