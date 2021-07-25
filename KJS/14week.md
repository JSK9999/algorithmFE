#프로그래머스 -입국심사

```javascript
function solution (people,times){
//목표값과 가장 근접한 값을 구하는것 에서 이분탐색으로 풀이
//이분 탐색은 기준이될 중간값이 필요하고 그 부근기준으로 탐색을 하게 되는것
//최소값은 최소로 걸릴 수 있는 시간 인원수 * 가장 짧게 걸리는 심사원 몰빵은 아님 예를들어 4분 심사원 3명 인원 3명이면 시간은 4분
//최대값은 최대로 걸릴 수 있는 시간 인원수* 가장 오래걸리는 심사원 몰빵의 경우
  const minMaxTimeArr = times.sort(function(a,b){
    return a-b;
  })
  let minTime  = 1; 
  let maxTime = people * minMaxTimeArr[minMaxTimeArr.length -1];

  let answer= []
//그럼 이 시간들을 기준으로 인원수만큼 진행해서 걸리는시간중에 가장 작은값을 구해야함
//이분탐색법으로 중앙부터 시작해서 기준값을 이용해서 min , max값을 조정해주면서 둘이 겹치면 반복문 끝나게 
  while(minTime <= maxTime){
      //테스트 케이스 6번 오류 
    let middleTime = Math.floor((minTime + maxTime) /2); //완전 최소값이니까 floor로 반내림
    //반복문 내부에서 계속 연산이 되어야함 밖에 빼면 연산이 안됨 밖에 있는애들은 초기값 선언일뿐
    let peopleCount = 0;
    times.forEach(pass=>{
      peopleCount +=  Math.floor(middleTime/pass) ; //이렇게 해서 peopleCount를 늘리고 이게 결국 심사위원들의 인당 몇명할수있는지  
      if(peopleCount >= people){
    //인원이 같은 경우 이걸안해주면 결국 인원이 같을 경우의 대한 처리가 없음 인원이 같다고 무조건 정답이아니니까 
        answer.push(middleTime)
        return ;
      }
    })

//인당 몇명할수있는지가 각 심사원들의 시간에 따라 더해진건데 이게 people보다 클이유는 전혀없다 딱맞아야지 
  if(peopleCount >= people) {
//이건 평균값이 크다는거니까 평균값을 내려줘야지 - middleTime으로 연산을 하니까 

// -- 로 하면 core dumped 오류 뜸; 너무 많이 돌려서 그런가봄 
//이진 탐색이니까 중간값 국룰로 해줘야 할듯
    maxTime = middleTime -1 ;
  }else {
    minTime = middleTime+1;
  }
}

const convertAnswer =answer.sort(function(a,b){
  return a-b;
})
  return convertAnswer[0];
}

```

![image](https://user-images.githubusercontent.com/43168019/126888926-dab6bee6-22e7-4121-9c7a-08925318be48.png)
