https://yeu.kr/JQe2z#js
```javascript
// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');

const childEl = container.childNodes;

console.log(childEl[1]); // button Element 

let curColor = container.style.backgroundColor;

childEl[1].addEventListener('click', function(e) {


   if(container.style.backgroundColor = curColor) {
      container.style.backgroundColor = '#ff0000'
   } else {
      container.style.backgroundColor = '#0000ff'
   }
   
})
     
// 정답이 아닙니다 ㅠ 
// 버튼을 클릭했을때, curColor가 정의 한번 해주고, 빨강 or 파랑으로 배경색을 바꾸려고 시도까지 해보았습니다. 
```

https://programmers.co.kr/learn/courses/30/lessons/42888?fbclid=IwAR0SdKinRKujjKTg2CV57Xk5zb2kLb3_-fyKdqsYYp3XLJaNu3sbYTi5PlA
```javascript



```


