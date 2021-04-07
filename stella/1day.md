###프로그래머스
```
function solution(a, b) {
    let total=0;
    let days=["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    let mon=[31, 29, 31, 30, 31, 30,31, 31, 30, 31, 30, 31];

    for (let i=0;i<a-1;i++){
        total+=mon[i]


    }
    total+=b-1;

    var answer = days[total%7];
    return answer;
}
```
###yeu
```
function solution(str) {
   var result="";
   for(let i=0;i<;i++){
      result+=str[i];
      if(!str.replaceAll(result,"")){
         break;
      }
   }
   return result;
}
```


