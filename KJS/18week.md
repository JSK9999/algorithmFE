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

## 도움 될 만한 추가 자료 
```javascript 
class Foo {
  x = 1;            // Field declaration
  #p = 0;           // Private field
  static y = 20;    // Static public field
  static #sp = 30;  // Static private field
  // 2019/5 : Chrome 미구현
  // static #sm() {    // Static private method
  //   console.log('static private method');
  // }

  bar() {
    this.#p = 10; // private 필드 참조
    // this.p = 10; // 새로운 public p 필드를 동적 추가
    return this.#p;
  }
}
```



# 프로그래머스 (모의고사)

이미 푼 관계로 스킵 
