# yeu 
https://yeu.kr/3KSzQ#js 

```javascript
function solution(num, func) {
   //파라미터로 a 의 값이 들어올거고 f 의 파라미터엔 익명 함수가 들어오는데 
   //결국엔 a 와 this의 값을 동일하게 해주면 되는건데 
 
   const answer =()=> { return func.call(num) };
   return answer;
}
```

# programmers 
https://programmers.co.kr/learn/courses/30/lessons/12930

```javascript
function solution(s) {
    //공백을 기준으로 단어를 배열로 놓고 이것을 반복문 돌려서 홀짝 처리하면 될듯 
    const words = s.split(' ');
    const tempWordArray =[]
    const answer =[]
    
    for(let i = 0; i< words.length; i++){
     	const convertword = words[i] ;
        tempWordArray.length = 0;
        
        //소->대문자만 생각하고 upper만줬는데 대->소도 확인 해야할듯
        for(let j = 0; j< convertword.length; j++ ){
          !(j % 2) 
            ? tempWordArray.push(convertword[j].toUpperCase()) 
            : tempWordArray.push(convertword[j].toLowerCase())
        }
  			
		answer.push(tempWordArray.join('') )  
     }
 
    return answer.join(' ')
}
```
### 예상 시간 복잡도 n^2 

![image](https://user-images.githubusercontent.com/43168019/119248798-99079480-bbce-11eb-9056-a7fc8028bad4.png)
