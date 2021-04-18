1. x-www-form-urlencoded을 json으로 변환해보자
 - https://yeu.kr/ZRHn7#js
```javascript
String.format = function() 
{
    let args = arguments; 
    return args[0].replace(/{(\d+)}/g, 
    function(match, num) 
    { 
      num = Number(num) + 1; 
      return typeof(args[num]) != undefined ? args[num] : match; 
    });
}

function solution(string) {
   let answer = '';
   let list = new Map();

   let keyTemp = '';
   let valueTemp = '';

   for(let i = 0; i < string.length; ++i)
   {
      let ch = string[i];
      if(ch === '=')
      { 
         for(let j= i+1; j < string.length; ++j)
         {
            if(string[j] === '&')
               break;
            valueTemp += string[j];
         }
         list.set(keyTemp, valueTemp);
         i += valueTemp.length + 1;
         keyTemp = '';
         valueTemp = '';
      }
      else
         keyTemp += ch;
   }
   answer += "{";
   for (const [key, value] of list) {
      if(isNaN(value) == false)
         answer += String.format('"{0}":{1},', key, value);
      else
         answer += String.format('"{0}":"{1}",', key, value);
   }
   answer = answer.slice(0, -1);
   answer += "}";

   return answer;
}
```
