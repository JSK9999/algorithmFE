1. x-www-form-urlencoded을 json으로 변환해보자
 - https://yeu.kr/ZRHn7#js
```javascript
//문자열을 {0}, {1} 처럼 arguments로 내보내는 확장 메서드.
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
      if(ch === '=') // key 값까지 읽은 경우
      { 
         for(let j= i+1; j < string.length; ++j)
         {
            if(string[j] === '&') // value값까지 읽은 경우
               break;
            valueTemp += string[j];
         }

         list.set(keyTemp, valueTemp); //map 객체에 key 와 value를 저장
         i += valueTemp.length + 1; //기존 루프문에서 읽은 value 만큼 더해줌.
         keyTemp = '';
         valueTemp = '';
      }
      else
         keyTemp += ch;
   }

   /// urlencoded to json
   answer += "{";
   for (const [key, value] of list) {
      if(isNaN(value) == false) //숫자인 경우 value에 쌍따옴표를 쓰지 않음.
         answer += String.format('"{0}":{1},', key, value);
      else
         answer += String.format('"{0}":"{1}",', key, value);
   }
   answer = answer.slice(0, -1);
   answer += "}";

   return answer;
}
```
