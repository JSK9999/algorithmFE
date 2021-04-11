# 프로그래머스

```javascript 
function solution(s) {
    let resultArray ;
    const wordArray = s.split("");
    //0으로 나눴을때 0이면 짝수 아니면 홀수
    wordArray.length %2 === 1 ? resultArray = wordArray.slice(wordArray.length/2,wordArray.length/2 +1) 
    :resultArray = wordArray.slice(wordArray.length/2-1 ,wordArray.length/2 +1)
    
    const answer = resultArray.join('')
    return answer;
}
```
# yeu

```javascript
function solution(string) {
   //일제히 치환하는건 정규식 쓰는게 편함 masking된 값도 마찬가지 (전화번호 같은거)
   const queryString = string
   // = 대신 : 으로  
   const  replaceEqualWord =  queryString.replace(/=/gi, ' ":" ')
   // & 대신 , 로
   const replaceCommaWord= replaceEqualWord.replace(/&/gi, ' "," ')
   // 공백 지우기
   const convertJSON =JSON.parse(`{"${replaceCommaWord.replace(/(\s*)/g,"")}"}`)


   let convertResult = {}
   //객체 순회해서 형변환 후 새객체에 넣어준다.
   for(let key in convertJSON){
      !parseInt(convertJSON[key]) && convertJSON[key] !== '0'  
      ? convertResult[key]= convertJSON[key] 
      : convertResult[key]= parseInt(convertJSON[key])
   }
   //객체를 리턴
   return JSON.stringify(convertResult) 
}
```
