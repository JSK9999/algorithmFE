function solution(array, commands) {
  let answer = [];
  for (let index = 0; index < commands.length; index++) {

    const i = commands[index][0];
    // 2,4,1
    const j = commands[index][1];
    // 5,4,7
    const k = commands[index][2];
    // 3,1,3


    let newArr = array.slice(i - 1, j);

    console.log('i-1~j:', array.slice(i - 1, j));

    const sort = newArr.sort();


    console.log('---------------------');
    answer[index] = newArr[k - 1];

  }
  return answer;
}
