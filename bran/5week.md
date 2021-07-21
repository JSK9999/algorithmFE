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

function solution(record) {
    var answer = [];
    let str = ''
    
    // 1. split을 이용해, 2차원 배열 생성. 
    let newArr = record.map(str => str.split(' '))
    
    // 2. uid 확인하는법 "미숙".
    // "Leave" 일경우, [i][2] 가 비어 잇기에,  
    // 구글링 힌트 : length를 확인하고, 
    // 
    
    let nickNameSet = {};
    for(let i=0; i< newArr.length; i++) {
        if(newArr[i].length === 3) {
            nickNameSet[newArr[i][1]] = newArr[i][2] // 이부분 
        }
        
    }
    
     
    
    // 3. 출력 
    for(let i=0; i<newArr.length; i++) {
        if(newArr[i][0] === 'Enter') {
            // str += `${newArr[i][2]} 님이 들어왔습니다.`;
            answer.push(nickNameSet[newArr[i][1]]+'님이 들어왔습니다.')
        }
        if(newArr[i][0] === 'Leave') {
             answer.push(nickNameSet[newArr[i][1]]+'님이 나갔습니다.')
        }   
    }
    
    console.log(answer)
    
    return answer;
}



```
![Screenshot 2021-06-20 194914](https://user-images.githubusercontent.com/40842018/122671231-9cf3fa00-d200-11eb-90ef-62b1d7774505.png)


