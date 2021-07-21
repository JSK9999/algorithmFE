# 프로그래머스 2단계 소수찾기 https://programmers.co.kr/learn/courses/30/lessons/42839


```javascript

function solution(numbers) {
    //우선 문자열의 모든 수를 조합해서 소수 판별 만들면될거같은데 
    let convert = numbers.split('');
    let numbersArr = []
    let answerArr =[]
    
    //숫자 조합  재귀로 하나씩 다 훑게 해서 숫자 조합
    const makeNumbers = (convert,string)=>{
        for (let i = 0 ; i< convert.length; i++){
            const keepArr = [...convert];
            keepArr.splice(i,1);
            makeNumbers(keepArr, string + convert[i]);
        }
        numbersArr.push(parseInt(string))
    }
   
    const sosuConvert=(numbersArr)=>{
        //소수란 1과 자기자신만 나눠져야하니까
        numbersArr.forEach(num=> {
          let count = 0;
          for(let i = 1; i <= num ; i++){
            
              if(!(num % i)){
                count ++;
                }
              //시간초과 때문에 조금이라도 걸르도록
              if(count >= 3){
                 return;
                }
          }
          //자신과 1로만 나눠진애들인 것  
          if(count === 2){
              answerArr.push(num)
            }
        })
      return answerArr;
    }
    
    makeNumbers(convert, "");
    //중복 숫자 판별
    
    const reduplicationArr = sosuConvert(numbersArr)
    const answer = reduplicationArr.filter((state,index)=>{
      return reduplicationArr.indexOf(state) === index;
    })
    
    return answer.length;
}


```
![image](https://user-images.githubusercontent.com/43168019/120102455-0ba3e180-c186-11eb-9733-846d585e6840.png)

