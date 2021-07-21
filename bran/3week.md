https://yeu.kr/uaX8r#js
```javascript
// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');


let btnElement = document.querySelector("button");
let numElement = document.querySelector("span");

let num = container.getElementsByTagName('span')[0].innerText;


 btnElement.addEventListener('click', addNum)

 function addNum () {
    num++;
    numElement.innerText = num
 }

```

https://programmers.co.kr/learn/courses/30/lessons/1845?fbclid=IwAR3ggvF5590Ljao9D3XvlcQcy154eMKk64Hq0H8mEaUqd1mN1Nog7AXoN_g
```javascript
function solution(nums) {
    var answer = 0;
    let newArr = [];
    
    // N/2 마리의 수를 구하기! 
    let count = Number(nums.length/2); // 2 or 3, nums의 길이는 항상 짝수가 들어옴!
    
    // 작은 수부터 한번 정리해주고
    let numsSort = nums.sort();
    
    // for loop를 돌리는데, 
    // 같은 수가 안나오도록 중복을 제거해서, newArr에 담기 
    for (let i=0; i< nums.length; i++) {
        if(newArr.indexOf(nums[i]) === -1) {
            newArr.push(nums[i]) 
        }
    }
     console.log(newArr)  //[1,2,3] or [2,3,4]
    // 값을 비교해주는데, 위에서 단순히 구한 count 값과 newArr의 길이값을 비교 
    // 첫번째 테케처럼 중복을 제거 해줫는데도 불구하고, 값이 안맞을수가 잇기에, count< newArr.length 비교
    answer = count < newArr.length ? count : newArr.length
    return answer;
}

// N/2마리의 폰켓몬을 선택하는 방법 중
// 4마리의 포켓몬  
// 3,1,2,3

// 1. 3,1 => 2
// 2. 3,2
// 3. 3,3
// 4. 1,2
// 5. 1,3
// 6. 2,3

// 6마리의 포켓몬 [3,3,3,2,2,4]

// 1. [3,3,3] =>1
// 2. [3,3,2] =>2
// 3. [3,3,2] =>2
// 4. [3,3,4] =>2
// 5. [3,3,2] => 2
// 6. [3,3,2] => 2
// 7. [3,3,4] => 2
// 8. [3,2,2] => 2
// 9. [3,2,4] => 3 answer
// 10. [2,2,4] => 2


```
