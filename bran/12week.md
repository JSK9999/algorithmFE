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


https://programmers.co.kr/learn/courses/30/lessons/72410?fbclid=IwAR2q_p9BlDKuyldgTwFTI_JWqZVblCLzgOBfNFCEFRX0LShPCyOAZryhLGk
```javascript
function solution(new_id) {
    var answer = '';
    return answer;
}

```
 
