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
    // 1. to lower case
    let lowerId = new_id.toLowerCase();
    
    // RegExr 
    // 2. Remove everything except a-z, -, _, . 
    let formatted = lowerId.replace(/[^A-Za-z;]/g, "");
    // 3. (.) is there more than 2 times, 
    
    // 4. remove (.) if its very first or last
    for(let i of formatted) {
        if(i === '.') {
            i.replace()
        }
    }
    
    console.log(formatted)
    
    
    // 5. if(new_id.length === 0) new_id === "a"
    
    
    // 6. if (new_id.length >= 16) remove above 15.
    // remove (.) if its very first or last
    
    // 7.while(new_id.length =< 2) new_id === 3
    return answer;
}

```
 
