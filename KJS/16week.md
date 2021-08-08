# Yeu 문자열 시작위치 찾기
```javascript 
function solution(str, find) {
   // RegExp, String, Array 관련 내장함수는 사용할 수 없습니다
   let answer = -1;
   let convertString ='';
   for(let i = 0; i<str.length; i++){
      for(let j = 0; j<find.length; j++){
        convertString = convertString+ str[i+j];
      }
      if(convertString === find){
       answer = i;
      }
    convertString='';
   }
 return answer;
}
```
