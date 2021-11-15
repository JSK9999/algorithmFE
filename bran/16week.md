https://yeu.kr/Waymh#js

생각보다 간단한 문제가, 단순하게 주어진 파람을 다 써서 해결하는 문제.
slice()로 텍스트를 짜르고, 붙히기

```javascript
function solution(str1, str2, pos) {
   console.log("str1: " + str1);
   console.log("str2: " + str2);
   console.log("pos: " + pos);

   let first = str1.slice(0,pos)
   return first+str2
}

```


https://programmers.co.kr/learn/courses/30/lessons/17677?fbclid=IwAR2YCKI9kElRyT7XEwJ36bJCMqEutmu84ZOx8TJVcQit4GStkRx-fcNTxF0
```javascript

function solution(str1, str2) {
    var answer = 0;
    
    // 1. 대소문자 전부 무시, 
    let filtered1 = str1.toLowerCase()
    let filtered2 = str2.toLowerCase()
    let arr1 = [];
    let arr2 = [];
    let newStr = ''
    
    // let filteredArr = filtered1.split('');
    // .replace(/[^a-zA-Z ]/g, "")
    
    // 2. cut 2 letters  + 특수기호 신경쓰기
    // arr1 = ["fr", 'ra', ... ]
    // arr2 = ["fr", 're', ... ]
    
    for(let i=0; i<filtered1.length-1; i++) {
        const str = filtered1.substr(i, 2).replace(/[^a-zA-Z ]/g, "");
        // newStr += str[i] + str[i+1]
        // arr.push(newStr)
        if(str.length === 2) {
             arr1.push(str)
        } 
    }
    
    for(let i=0; i<filtered2.length; i++) {
        const str = filtered2.substr(i, 2).replace(/[^a-zA-Z ]/g, "");
        
        if(str.length === 2) {
             arr2.push(str)
        } 
    }
    
    // console.log(arr1, arr2)
    // const set = new Set([...arr1, ...arr2]);
     
    if(arr1.length === 0 && arr2.length ===0) return 65536;
    
    
    // 3. 자카드 유사도 계산
    // 전체 구하고
    let unionArr = [...arr1, ...arr2];
    let union = [...new Set(unionArr)];
    let interArr = arr1.filter(val => arr2.includes(val))
    
 
    
    if(union.length === 0) return 65536; // 분모가 0일때
    if(interArr.length === 0) return 0 // 분자가 0일떄


    // 유사도 계산
    let grade = interArr.length/union.length;
    
    
    // 4. 결과값 * 65536, 소수 때버리기
    answer = (Math.floor(grade * 65536))
     
    return answer;
}

/**
자카드 유사도 

J(A,B)

A = {1,2,3}
B = {2,3,4}
합집합 = {1,2,3,4} = 2/4=0.5, 교집합{2,3}/ 합집합{1,2,3,4}
= 0.25 * 65536 = 16384

*/
```
