# 프로그래머스 문제 https://programmers.co.kr/learn/courses/30/lessons/1845

```javascript
function solution(nums) {
    //폰켓몬이 N/2 마리에 가장 가까운 수를 리턴하면되고 
    //그 숫자는 일단 종류가 겹치는거 다지우고 
    //N/2랑 숫자가 동일하거나 이거보다 작으면될듯 
    let answer;
    const maxPickNum = nums.length/2;
    //배열의 중복 원소 제거 1
    const convertsNums = nums.reduce((acc,cur)=>{
    if (acc.includes(cur)){
    return acc;
    }else {
    acc.push(cur);
    }
    return acc;
    },[])
    //배열의 중복 원소 제거 2 - Set한방이면 바로 중복 제거 가능 심지어 훨씬 더빠름(테스트 시간 거의 절반)
    //난 리듀스가 더좋음 왜냐면 중간에 조건을 입맛대로 추가 할 수 있으니까 
    /*
    const convertsNums = [... new Set(nums)]
    */
    
  if (convertsNums.length === maxPickNum || convertsNums.length < maxPickNum){
  	    answer = convertsNums.length;
     } else if (convertsNums.length > maxPickNum){
  		answer = maxPickNum;
     }
 
   return answer;
}

```
![image](https://user-images.githubusercontent.com/43168019/120913953-c166b700-c6d5-11eb-93b2-8013bdbbacc3.png)


# Yeu 문제  https://yeu.kr/WlvKK#js
```javascript 
// 여기에 코드를 작성해주세요
let button = document.getElementsByTagName('button')[0];
let span = document.getElementsByTagName('span')[0];
let num = 0;

button.addEventListener('click', ()=>{ 
   num += 1;
   span.innerHTML = num;
})
```
