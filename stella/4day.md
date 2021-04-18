# 프로그래머스

```
function solution(s) {
    var answer = '';
    var i = s.length/2;
    var j = s.length/2 - 0.5;
​
    if(s.length%2 === 0){
        answer += s[i-1]+s[i];
    }else{
        answer += s[j];
    }
​
    return answer;
}
```
# yeu
```
function solution(string) {
   let answer = {};
   const info = string.split("&");
   for (const v of info){
      const key = v.split("=")[0];
      const val = v.split("=")[1];
      if (!isNaN(val)){
         answer[key] = parseInt(val);
      }else if (val == "true" || val == "false"){
         answer[key] = Boolean(val);
      }else{
         answer[key] = val;
      }
   }
   return JSON.stringify(answer);
}
```
