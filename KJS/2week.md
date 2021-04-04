# 프로그래머스

```javascript
function solution(n) {
    //3진법으로 변환     
    let convert = n.toString(3)
    //배열에 1개씩 저장  
    let split = convert.split("")
    //배열의 원소 reverse
    let reverse =split.reverse()
    //다시 합치기
    let join = reverse.join('')
    //3진법인 숫자를 형변환
    let convertN = parseInt(join,3)
   
    
    return convertN
}
```
# Yeu

```javascript

function solution(string) {
   
  const icons = [...string]
  const convert = icons.reduce((acc,curr)=>{
     if(!acc.includes(curr)){
        acc.push(curr)
     }
     return acc;
  },[])
 
 return convert.join('')
    
}
```
