function solution(numbers) {
  const answer = [];
  const obj = {};
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }

  console.log(new Set(answer));
}
