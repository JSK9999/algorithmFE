# 1주차 yeu 문제 바인드 this

let r = Math.random();
let a = 10;
let f = solution(a, function () {
return this + r;
});
let result = f();

function solution(num, f) {
// 여기에 코드를 작성해주세요
// 우선 bind() 메소드가 호출 되면 새로운 함수가 생성됩니다.
// 이 문제는 result 의 값은 a+ r 과 같을 수 있도록 해주는것!
// f()는 함수이고, bind()를 통해 새로운 함수를 생성

let ff = f.bind(num); // num은 4번째 줄의 this와 같음

// function () {
// return num + r
// }

// at line 4, this + r = a + r

// return ff() at line 6
return ff;
}

# 1주차 프로그래머스 이상한 문자

function solution(s) {
let arr = [];

    let word = s.split(' ');
    for(let i=0; i<word.length; i++) {
    let letter = ''
        for(let j=0; j<word[i].length; j++) {
            if(j % 2 ==0) letter += word[i][j].toUpperCase()
            else letter += word[i][j].toLowerCase();
        }
    arr.push(letter)
    }

    console.log(arr.join(' '))
    return arr.join(' ')

}

// 2중 for loop를 이용해서 문제를 풀었는데,
// split('') 를 통해 [1,2,3] 쪼개주고 난 뒤,
// 첫번째 for loop에 word갯구 만큼 for을 돌리고,
// 두번쨰 for loop에서 word[i] 각 하나의 알파벳 돌리고,

// if문을 통해 짝수이며 = 대문자, 홀수이면 = 소문자
// 두번째 for loop 끝나며, 각 letter를 비어있는arr 에 push!
// 마지막으로 결과값을 함치기 위해, join()를 써서 마무리
