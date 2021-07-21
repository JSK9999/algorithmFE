# 1주차 프로그래머스 문제 2016년


```javascript
function solution(a, b) {
//타임어택이아니니까
//Date객체를 일부러 쓸 필요는 없는것 같다 Date객체쓰면 그냥 1~2줄이면 될듯;
 
//주의할점은 1주일이니까 7로 나누는데 7일 14일 경우는 나머지가 0 이라는점
//배열의 0번째가 있어야 한다는 점 
//그래서 1일 인 경우 배열의 1번 인덱스에 접근하기때문에 배열을 정리 
    let dateInfo =['THU','FRI','SAT','SUN','MON','TUE','WED' ]
//윤년이란 2월이 29일인 날이고 1월 31일인 경우
//2월의 1월의 1일에 비해 3일 밀린 월요일이라는 점
    
//1월 기준으로 dateInfo 배열이 시작되니까 1월의 offSet은 0 2월은 3인것    
    let DateOffset = [0,3,1,3,2,3,2,3,3,2,3,2] ;

//매달 1일의 요일을 정해주는 반복문  
    for (let i=0 ; i<a; i++){
   	 let spliceDate = dateInfo.splice(0,DateOffset[i]);
     let concateDate = dateInfo.concat(spliceDate); 
     dateInfo = concateDate;
    }
//매달 1일의 요일을 구했으니 나머지 일 수는 7로 나눈 나머지 값을 인덱스 번호로 하여 
//요일을 가져옴    
    let modDate = b % 7;
    let answer = dateInfo[modDate];
    
    return answer;
}
```

# yeu 1주차 반복 되는 패턴을 찾아보자 
```javascript
function solution(str) {


//한칸씩 잘라서 저장하고 저장한만큼 문자열을 잘라내고 
//저장된 문자열을 잘라진 문자열과 저장된 문자열의 길이만큼 비교 해서 같을 때 까지 반복    
   let result ; 
// i 가 1이면 2차 검증에서 바로 같은 단어나오면 안댐  ex) aa1234aa1234 이런형태면 aa로 잘림
// 이건 로직이 약하니까 추후 수정 할 필요가 있음  
   let i = 2;
   while(true){
   a = str.substring(0,i)
   let c = str.substring(i,str.length)
   let d = c.substring(0,i)
   
   if(a === d){
      result =a
      break
   }
   i++;
   }

console.log(str)
console.log(result)
  return result
}
```
