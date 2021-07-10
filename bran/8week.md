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

// output 'BC', expected BC
// output'a', expected A
// output: EPD, expected 'e F d'

function solution(s, n) {
    var answer = '';
    let uniCode;
    let newArr = []
    let startNum = 65;
    let max = 90;
    let first = s.split('')[0];
    let allLength = s.split(" ").join("").split('');
    
    // a,b,c,d,e,f,g
    // String.charCodeAt() // "A" ~ 90 'Z'
    // 1. iterate to get the first char's unicode 
    for(let i=0; i<=allLength.length-1; i++) {
        
        uniCode = allLength[i].toUpperCase().charCodeAt() + n;
                

        if(uniCode > 90) {
           uniCode = startNum + (uniCode-max) -1 
        }
        //console.log(uniCode)
        
        // 
        let toStr = String.fromCharCode(uniCode);
        
        
        
        
        // 3. iterate for each str
        for (let i=0; i<toStr.length; i++) {
            newArr.push(toStr[i])
        }
    }
    
       
    
     console.log (newArr.join(''))
    
    
     
    return answer;
}


 
 
```



