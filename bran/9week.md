https://yeu.kr/MhPo4#js
```javascript


```

https://programmers.co.kr/learn/courses/30/lessons/43238?language=javascript&fbclid=IwAR2XW4XW1w3jtjM95_xi9H7w9zdHzCFc1Ny6yX88ANNwYsx3jFAUZtjKVMc
```javascript

    // 이진 탐색(Binary Search)
    // 이진 탐색 알고리즘은 정렬 된 배열 내에서 대상 값의 위치를 찾는 알고리즘
    // 성공할 때까지 나머지 절반을 제거하고, 나머지 절반에서 탐색을 계속함.

    
    // 심사대에서는 동시에 한명만 심사 가능 
    // 모든 사람이 심사를 받는데 걸리는 시간을 최소화 
    
    // 입국심사 기다리는 사람 수, n 
    // 심사관 한 명이 심사하는데 걸리는 시간 ,times
    // return 모든 사람이 심사를 받는데 걸리는 시간의 최솟값
    
    // ex ) 6명의 사람 
    // 심사대 2대 [7min, 10min]
    
    // [7,10,14,20,21,28,30 etc...]
    // 2ppl done, 두 사람이 먼저 바로 가능
    // 3rd p, after 7min
    // 4th p, after 10min
    // 5th p, after 14min
    // 6th p, after 20min, here!*** 2 cases [20, 30] or [21, 28]
function solution(n, times) {
    var answer = 0;
    let arr = [];
    let maxTime = n * times[times.length-1]; //60
     
    
    
    let customs = times.length; // 2
    let leftPassengers = n-customs; // 4
    
    let startIndex = 0;
    let endIndex = times.length - 1;
    
    
    //1. find potential answer [7,10,14,20,21,28,30 etc... 60]
    // [7-14] [10-20] [14-21] [20-30] [21-28] [28-35] [30-40]
    //2,  3       4       5       7       6       8       9             
    for (let i=1; i<= n; i++) {
        arr.push(times[0] * i) // 7,14,21,28  
    }
    
    for (let i=1; i<=n; i++) {
        arr.push(times[1] * i)
    }
    arr.sort((a,b) => a-b); // [7,10,14,20,21,28,30 etc... 60]
 
    // 2. 바로 심사 가능한 인원 제외 
    
    let newArr = (arr.slice(2)); // [14,20,21,28,30 etc... 60]
    
    // 3. search in condition. 
    // 여기가 핵심. 이진 탐색 이해 부족
    while(startIndex<= endIndex) {
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) /2);
        if(newArr[middleIndex] === n) {
             console.log(middleIndex)
        }
        if(newArr[middleIndex] < n) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }


    return answer;
}
 
```



