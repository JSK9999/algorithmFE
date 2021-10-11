# Yeu 반복자(iterator)를 만들어보자 

https://yeu.kr/BREJB#js
```javascript
function solution(classname, list) {
   // 여기에 코드를 작성해주세요
   const answer = new class customClass extends Array {
   static name = classname;
   static list = list;
      
   next() {
    const iteratorValue = {value: list[0], done:false};
    
      if (list.length > 1) {
         iteratorValue.value = list[0];
         iteratorValue.done = false; 
         list.splice(0,1);
      } else {
         iteratorValue.value = list[0];
         iteratorValue.done = true;
      }
      return iteratorValue;
     }
   }
   return answer;
}


```

# 프로그래머스 (모의고사)

이미 푼 관계로 스킵 
