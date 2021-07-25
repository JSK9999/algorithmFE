function solution(array, commands) {
  let answer = [];
  // 정해진 array에 commands가 3개일때 길이 3개만큼 증가
  for (let index = 0; index < commands.length; index++) {

//3개 commands검색
    const i = commands[index][0];
    // 2,4,1
    const j = commands[index][1];
    // 5,4,7
    const k = commands[index][2];
    // 3,1,3


    let newArr = array.slice(i - 1, j);

    console.log('i-1~j:', array.slice(i - 1, j));

    const sort = newArr.sort((a, b) => a-b);
    
    answer[index] = newArr[k - 1];

  }
  return answer;
}
