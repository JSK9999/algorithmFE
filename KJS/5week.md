# Yeu    https://yeu.kr/xnI01#js

```javascript
function solution(string, start, length) {
   let answer = ""

if(length >= string.length - start ){
    length = string.length -start
}
   for(let i = start ; i < length +start ; i++){
      answer += string[i]
   }

return answer;
}
```
### 시간복잡도 O(n)


# 프로그래머스  https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript

```javascript
function solution(a, b) {
    let bigNum;
    let smallNum;
    let answer = 0;
    let length ;
    
    if(a>b){
        bigNum =a;
        smallNum=b;
    }else{
        bigNum =b;
        smallNum =a;
    }
    
   length = bigNum - smallNum;
    
    for(let i = smallNum; i< length +smallNum+1 ; i++ ){  
        answer += i
    }
    
    
    return answer;
    
}
```
### 시간복잡도 = O(n)

![image](https://user-images.githubusercontent.com/43168019/116808932-82918e80-ab76-11eb-9372-49d670c948dd.png)
