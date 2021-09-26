https://yeu.kr/kII1N#js
```javascript
async function solution(url, key) {
   // 여기에 코드를 작성해주세요
   let response = await fetch(url)
   let data = await response.json();

   return data[key]

}

async 문법을 써서, 비동기라는걸 알아채고, 거기에 fetch문법을 사용하고, 받아온 데이터중에 key값을 이용해 오브젝트중 하나를 리턴하면 해결

```


https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
```javascript
// stack!
// board is a multi dimentional array [[], [], [], ...]
// moves is where crain moves to pick up [1,5] by column order
// pink, green, blue...

function solution(board, moves) {
    var answer = 0;
    let stack = [];
    moves.forEach(el => {
        for(let i=0; i<board.length; i++) {
            if(board[i][el-1] !== 0 ) { // 인형을 만나고 
                let temp = board[i][el-1];
                temp = 0; // 인행을 꺼내면, 거길 0으로 변경(다음 픽업을 위해)
                if(temp === stack[stack.length -1]) { // 뽑은애랑 스택최상단애 비교 
                    // remove from the stack 
                    stack.pop();
                    answer += 2; // 제거 했으니, answer에 +2 인형 
                } 
                else stack.push(temp);
                  
            }
         
        }
       
    })
    return answer;
}
```
 
