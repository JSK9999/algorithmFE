# programmers 

```javascript
function solution(s) {
    let index = 0
    let result = ""
    for(let i = 0; i < s.length; i++){
        if(s[i] === " ") {
            index = 0
            result += " "
        }
        else {
            result += index % 2 ? s[i].toLowerCase() : s[i].toUpperCase()
            index++    
        }
    }
    return result
}
```
# yeu

```javascript
function solution(num,f){
var result=()=>f.call(num);
return result;
}
