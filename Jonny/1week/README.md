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

Second : 

// hyunjin.direct@gmail.com
//https://yeu.kr/76ykz
//reference : https://www.pohkeeheng.com/notes/Boyer-Moore-Horspool-algorithm-in-Javascript

const constructBadMatchTable = (pattern) => {
    const map = new Map();
    const patternLength = pattern.length;

    for(let i = 0; i < patternLength - 1; i++){
        map.set(pattern[i], patternLength - i - 1);
    }
    
    //if rightmost character already in map, skip this part.        
    if(!map.has(pattern[patternLength - 1])){
        map.set(pattern[patternLength - 1], patternLength);
    }
    return map;
}
Second : https://yeu.kr/76ykz
```javascript
// hyunjin.direct@gmail.com
//https://yeu.kr/76ykz
//reference : https://www.pohkeeheng.com/notes/Boyer-Moore-Horspool-algorithm-in-Javascript

const search = (string, pattern) => {
    const badMatchTable = constructBadMatchTable(pattern);
    let offset = 0;
    
    const patternLastIndex = pattern.length - 1;
    var matches = [];
    //1
    while(offset <= string.length){
        let currentIndex = patternLastIndex;
        //2
        while(pattern[currentIndex] === string[currentIndex + offset]){
            if(currentIndex === 0){
              matches.push(offset);
              offset += 1;
              break;
            }
            currentIndex --;
        }
        //3
        const rightMostChar = string[offset + patternLastIndex];
        if (badMatchTable.has(rightMostChar)){
            offset += badMatchTable.get(rightMostChar);
        } else{
            offset += pattern.length;
        }
    }

    return matches;
}

function solution(str) 
{
   for(var i = 1; i < str.length; ++i)
   {
     var temp = str.substr(0,i);
     var result = search(str,temp);
     var count = temp.length * result.length;
     if(count == str.length)
     {
        console.log(temp);
       return temp;
     }
   }
   
   return str;
}
```
