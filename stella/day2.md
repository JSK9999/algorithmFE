##프로그래머스
```
function solution(n) {
    var answer = 0;
    var number=n.toString(3).split('').reverse().join('');
    answer=parseInt(number,3);
    return answer;
}
```
