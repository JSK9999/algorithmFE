# 프로그래머스 2020 카카오 블라인드 테스트 > 문자열 압축  
https://programmers.co.kr/learn/courses/30/lessons/60057
```javascript
function solution(s) {
	const slicedArray = [];
  
  for(let m = 1; m <s.length; m ++){
  	const a = [];
    const b= [];
    
    	for(let i = 0; i< s.length; i= i+m){
      	let b=	s.slice(0+i,i+m);
        a.push(b); 
        };
        
    const result = {};    
    
    a.forEach((x,index) => {
    	if(x === a[index+1]){
      	result[x] = (result[x] || 1) + 1; 
        }
     });
     
     slicedArray.push(result);
   };
   
   const filteredArray = slicedArray.filter(state=> Object.keys(state).length)
   const answers = [];
   filteredArray.map(state=>{
   	let stringLength = s.length;
    
    for(const key in state){
    	stringLength =  stringLength - (key.length * state[key]) + (key + state[key]).length
      };
    
    answers.push(stringLength);
    });
   
   let minLengthAnswer;
   minLengthAnswer = Math.min(...answers); 
	
  if(!answers.length){
  	minLengthAnswer = s.length; 
  };
  
return minLengthAnswer;  
};
```
![image](https://user-images.githubusercontent.com/43168019/140633605-b68dcd16-5788-4a91-9f4b-ee703136a093.png)


# Yeu 떨어지는 공을 받아내자 
https://yeu.kr/sPTzl#js
```javascript

function solution(ball, list) {

   // 녹색공이 아래로 떨어집니다.
   // 바닥에 닿기전에 검은공으로 녹색공들을 받아주세요
   // 20번 받아내면 성공입니다
   // 녹색공이 있는 위치로 검은 공을 이동시켜서 녹색공에 닿게하면 받아내는것입니다

   // go 함수로 검은공을 이동시킬 수 있습니다.
   // 최대 이동범위는 -0.3 ~ 0.3 이 이상 넘어서면 이동을 하지 않습니다
   let pos = ball.go(0);

   // go 함수의 리턴값은 이동이 적용된 다음의 검은 공의 좌표값입니다
   // 최대 이동범위 이상을 적용하거나 0을 적용하더라도 공의 좌표값을 리턴합니다
   // console.log(pos);
   
   // list 변수는 녹색공들의 정보가 담긴 배열이며
   // 각각의 요소는 {"x":65,"y":48,"radius":2,"movedistance":0.3} 이런 모습입니다
   // movedistance는 공이 이동한 거리입니다
   // radius는 반지름입니다
   // x, y 는 공의좌표입니다

   // 화면의 너비는 100, 높이는 50입니다



   //pos 는 검은 공의 좌표 정보
   //list 안에 x y 좌표가있는데 y는 떨어지니까 계속 바뀜 (밑으로 갈수록 y 가커짐  최대 50까지 가능)
   //그러면 가장 밑에 있는 녀석부터 처리를 해야겠음

   let target = pos.x;
   let targetY = 0;
   for(let i = 0; i<list.length; i++){
      //리스트 순회해서 가장 밑에 있는 녀석을 집어야함
      //닿으면 사라져서 리스트 바뀌니까 매번 최대 크기 녀석만 해도 될듯
      if(targetY < list[i].y){
         targetY = list[i].y;
         target = list[i].x;
      }
   }
   if(pos.x < target){
      ball.go(0.3)
   }else{
      ball.go(-0.3)
   }
   
}
```
