
https://yeu.kr/LRRip#html

```javascript
function solution(str) {
   let answer = '';
   var dict = {};
   for(var i = 0; i < str.length; i+=2)
   {
      var temp = str[i] + str[i+1];
      dict[temp] += 1;
   }

   for(key in dict)
   {
      answer += key;
   }

   console.log(answer);

   return answer;
}
```

https://programmers.co.kr/learn/courses/30/lessons/68935

```javascript
function solution(n) {
    var answer = 0;
    
    let str = "";
    
    while(parseInt(n) > 0)
    {
        let temp = (n % 3); //10to3
        str += parseInt(temp); 
        n /= 3;
    }
    
    for(let i = str.length - 1; i >= 0; --i)
    {
        let ch = str[i];
        let t = ch * Math.pow(3, str.length-i-1); // 3to10
        answer += t;
    }
    
    return answer;
}
```
