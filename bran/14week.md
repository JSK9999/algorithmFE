
```javascript


```
<img width="658" alt="Screen Shot 2021-10-11 at 11 57 06 AM" src="https://user-images.githubusercontent.com/40842018/136727018-6609ecee-cb8f-443f-8975-d83165232ff6.png">


https://programmers.co.kr/learn/courses/30/lessons/42840?fbclid=IwAR1kDG5m6VaXMLIKK0-rMF3iXsHraWKeiTZBvWI1_gIh2PNl7I1iqz4rMGI
```javascript
function solution(answers) { // [1,2,3,4,5]
    var answer = []; 
    
    const loser1 = [1,2,3,4,5];
    const loser2 = [2,1,2,3,2,4,2,5];
    const loser3 = [3,3,1,1,2,2,4,4,5,5];
    
    let grade = [0,0,0]; // 수포자 점수 array
    
    for(let i=0; i<answers.length; i++) {
        if(answers[i] === loser1[i%5]) { // 수포자1 찍는 방식 5개
            grade[0]++;    
        }
        if(answers[i] === loser2[i%8]) { // 수포자2 찍는 방식 8개
            grade[1]++;    
        }
        if(answers[i] === loser3[i%10]) { // 수포자3 찍는 방식 10개
            grade[2]++;    
        }
    }
    
    console.log(grade); // [5,0,0] => 수포자 1만 5번 다 맞춤, 나머지 2,3은 다 틀림
    
    const maxGrade = Math.max(...grade);
    // if..else 문을 사용했을 경우, 같은 grade 일 경우 같은 번호가 answer에 들어가서 안됨
    if(grade[0] === maxGrade) {
        answer.push(1)
    } 
    if(grade[1] === maxGrade) {
        answer.push(2)
    } 
    if (grade[2] === maxGrade){
        answer.push(3)
    }  
    
    answer.sort();
    
    
    return answer;
}
```

