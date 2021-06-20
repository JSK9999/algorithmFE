## 프로그래머스 2019 카카오 블라인드 테스트 

```javascript
function solution(record) {
    //첨에 잘못보고 change에 중점으로 생각하고 바뀌는 건줄알았는데 들락날락할때도 바꿔들어오면되니까
    //다바꾼후 마지막 닉네임을 알아야겠다고 판단
    const finalNickname= record.reduce((acc,cur)=>{
        const curArr = cur.split(' ');
        //이조건이 없어서 테스트 오류났었는데 마지막에 leave를 하면 이게 닉네임이 안남아 undefined로 되니까 
        //record의 마지막이 leave인 경우 무시를 해야지 
        if(curArr[2]){
            acc[curArr[1]] = curArr[2];
        }    
    return acc;
    },{})
  
    //다바꿔주고 한글변환해야되는데 Change는 필요가 없으니까 데이터에서 아예 제외를 해도됨
    //이미 change써먹었으니까 
    const deleteChangeRecord = record.filter (state=> !state.includes('Change'))
    
    //한글 변환 
    const answer= deleteChangeRecord.reduce((acc,cur)=>{
        const curArr = cur.split(' ')
        const nickname = finalNickname[curArr[1]];
        if(nickname && cur.includes('Enter')){
            acc.push(`${nickname}님이 들어왔습니다.`)
        }else if(nickname && cur.includes('Leave')){
            acc.push(`${nickname}님이 나갔습니다.`)
        }
        return acc;
    },[])
    
    return answer;
}
```
![image](https://user-images.githubusercontent.com/43168019/122665537-c56cfb80-d1e2-11eb-853f-fe22539ee22d.png)

## Yeu

```javascript 
// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');
let button = container.querySelector('button')
let div = container.querySelector('#text');


let toggle = true
button.onclick = ()=>{
   toggle === true
   ? div.style.color = 'red'
   : div.style.color = 'blue'
   
   return toggle = !toggle;
}
```

