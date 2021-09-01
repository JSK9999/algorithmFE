# 프로그래머스 2021 KAKAO BLIND RECRUITMENT > 신규아이디 추천

###### 피곤해서 대충풀었습니다 ㅠ
```javascript
function solution(new_id) {
    const specialWord = [
                         '~',
                         '!',
                         '@',
                         '#',
                         '$',
                         '%',
                         '^',
                         '&',
                         '*',
                         '(',
                         ')',
                         '=',
                         '+',
                         '[',
                         '{',
                         '}',
                         ']',
                         ':',
                         '?',
                         ',',
                         '<',
                         '>',
                         '/'
                        ]
    //아이디를 참;;;
    
    //1단계
   const lowerWord = new_id.toLowerCase().split('');
   
    //2단계
   let filterSpecialWord = lowerWord.filter(word =>!specialWord.includes(word));
    
    //3단계
    for(let i = 0; i<filterSpecialWord.length; i++){
        if( 0<i<filterSpecialWord.length -1
           && filterSpecialWord[i] ==='.'
           && (filterSpecialWord[i-1] === '.' 
               ||filterSpecialWord[i-1] === null 
              )
          )
        {
          filterSpecialWord[i] = null;
        }
    } 
   
    //4단계
   const nullFilterd = filterSpecialWord.filter(font => font !== null)
   
   if(nullFilterd[0] === '.'){
       nullFilterd.splice(0,1)
   }
   
   if(nullFilterd[nullFilterd.length-1] === '.'){
       nullFilterd.splice(nullFilterd.length-1,1)
   }
   
   //5단계
    
   const lastFilterd = nullFilterd.filter(font => font !== ' ')
   if(lastFilterd.length === 0){
   lastFilterd.push('a')
   }
   //6단계
    
   if(lastFilterd.length > 15){
   lastFilterd.splice(15, lastFilterd.length -1)
   }
   
     
   if(lastFilterd[lastFilterd.length-1] === '.'){
   lastFilterd.splice(lastFilterd.length-1,1)
   }
   
   //7단계
    
   if(lastFilterd.length <3) {
       if(lastFilterd.length === 1){
           lastFilterd.push(lastFilterd[lastFilterd.length -1])
           lastFilterd.push(lastFilterd[lastFilterd.length -1])
       }else{
           lastFilterd.push(lastFilterd[lastFilterd.length -1])
       }
   }
   
  return lastFilterd.join('') 
}
```
![image](https://user-images.githubusercontent.com/43168019/131701056-40af93ce-9d94-46f9-9193-8716eb225f07.png)


