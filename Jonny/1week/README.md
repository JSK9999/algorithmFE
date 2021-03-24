First : https://programmers.co.kr/learn/courses/30/lessons/12901
```javascript
//Created : hyunjin.gil (hyunjin.direct@gmail.com)

function solution(a, b) 
{
    var answer = '';

    let days = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    //1월 1일은 금요일. 따라서 목요일부터 시작해야 함.
    let months = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    const month = a;
    const day = b;

    
    var total = 0;
    // 1월 기준 0부터 시작하므로 -1 
    for(var i = 0; i < month - 1; ++i) 
    {
        total += months[i];
        //입력 받은 달 까지의 환산 날짜수를 더한다.
    }
    total += day;
    //남은 날짜 수를 더한다.
    
    answer = days[total % 7];
    //현재 요일을 구한다.
    return answer;
}
//Ref : https://www.timeanddate.com/calendar/months/
```
