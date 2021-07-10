https://yeu.kr/IVfvj#js
```javascript
function solution(inja1, inja2) {
   // 여기에 코드를 작성해주세요
   console.log(inja1);
   console.log(inja2);

   let result = inja2.repeat(inja1)

   return result; // 'hello' 를 리턴합니다
}

```

https://programmers.co.kr/learn/courses/30/lessons/12926
```javascript
function solution(s, n) {
    var answer = '';
    let startNum = 65;
    let first = s.split('')[0];
    let allLength = s.split(" ").join("").split('').length;
    
    console.log(allLength)
    
    // a,b,c,d,e,f,g
    // String.charCodeAt() // "A" ~ 90 'Z'
    
    // 1. Find the first letter of "s"
    let firstLetter = first.toUpperCase();
     
    // 2. add up n's number in unicode
    let uniCode = firstLetter.charCodeAt();
    let referNum = (uniCode + n)
    if(referNum>90) {
        referNum = startNum
    }
    
    let following = (String.fromCharCode(referNum))
    // 3. print out based on the length of s
    
    // 4. upper/lower 
    if(first === first.toUpperCase()) {
        console.log(following.toUpperCase())
    } else {
        console.log(following.toLowerCase())
    }
    
    
    return answer;
}
 
 
```



