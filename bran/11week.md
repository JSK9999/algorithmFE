https://yeu.kr/4bLcf#js
```javascript
function solution(str) {
   // RegExp, String, Array 관련 내장함수는 사용할 수 없습니다
   // 인자는 문자열, 공백이 존재할수 있음
   // 

   let arr = '';
   const space = ' '

   console.log(str.length) // 문자 길이를 먼저 찾아주고, 

   for(let i=0; i< str.length; i++) { 
      if(str[i] !== space) { // 공백이 있을수 있으니, 스페이스랑 비교해서 다르면,
         console.log(arr += str[i]) // arr(빈 텍스트)에 넣어주기
      }
   }
   
    return (arr) // 마무우리~ 
}

```

https://programmers.co.kr/learn/courses/30/lessons/12899?fbclid=IwAR3nKdzSFXFjbSWFPAFWHUjyjSx16K4D-tb4rjciPHOGO67H9qF5hvfrKkg
```javascript
function solution(n) {
    var answer = '';
    // 124나라에서는 모든 수를 1,2,4만 사용 
    

    // 1,4,7,10
    // 1,11,21,41,
    let result = ''
    let first = 1;
    let second = 2;
    let forth = 4;
    
    // 1,4,7,10...
    // 1,11,21,41,
    for(let i=1; i<=n;i+=3) {
        result += `${first}`
    }
    
    // 2,5,8,11...
    // 2,12,22,42,
    for(let i=2; i<=n;i+=3) {
        result += `${second}`
    }
    
    // 3,6,9,12...
    // 4,14,24,44,
    for(let i=3; i<=n;i+=3) {
        if(i == 1) {result += `${first}${forth}`}
        result += `${forth}`
    }
    
    console.log(result);
}
 
```
