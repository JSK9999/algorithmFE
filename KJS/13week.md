# 프로그래머스 

```javascript

function solution(s, n) {
   //대,소문자 다다르니까 아스키코드로 밀어야겠네
   //소문자 아스키, 대문자 아스키 z 기준으로 다음으로 밀리는것만 고려하면 될듯
   //대문자 65-90
   //소문자 97-122
   
   //배열에 반환하고 숫자로 반환하고
   const convertArr = s.split('');
   const convertAshll = convertArr.reduce((acc,cur)=>{
       let curCapital ; 
       if(cur !== ' ' ) {
           curCapital  = cur.charCodeAt(0) > 96 ? 'small': 'big'; 
           cur = cur.charCodeAt(0) +n;
       }
       if( curCapital=== 'small' && cur > 122  ){
           acc.push(cur- 26)
       }else if (curCapital=== 'big' && cur > 90){
           acc.push(cur -26)
       }else {
           acc.push(cur)
       }
       return acc;
   },[])
   const convertString = convertAshll.map((data)=>data !== ' ' ? String.fromCharCode(data) : data)
   const answer = convertString.join('');
    
    return answer;
}
```
![image](https://user-images.githubusercontent.com/43168019/125183355-ed370880-e250-11eb-994b-c4a817f06654.png)


# yeu 

```javscript 
function solution(inja1, inja2) {
   // 여기에 코드를 작성해주세요
   let result = inja2;

   for(let i = 0; i< inja1-1; i++){
      result += inja2
   }
   return result; 
}
```


