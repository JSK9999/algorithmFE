# yeu

```javascript 
function solution(line, circle, screensize, width, centerx, centery) {

   //너비 3 높이 2 => 5
   const widthX = (width / 6) * 3
   const widthY = (width /6) * 2
   console.log(widthY, centery)

   //사각형 범위 만들어 주는 것 사각형이니까 선 4개 
   line(centerx - widthX  , centery  -widthY , centerx + widthX , centery - widthY);
   line(centerx -widthX, centery  + widthY , centerx + widthX , centery + widthY)
   line(centerx -widthX ,centery  - widthY , centerx - widthX , centery + widthY)
   line(centerx + widthX ,centery  - widthY , centerx + widthX , centery + widthY)
  

   circle(centerx, centery, 0.5);
}

```
# programmers

```javascript
function solution(numbers) {
  let results=[]
  //배열에 서로 다른수 를 뽑아서 쓰는데 
  //5가 2번나오는데 결과 배열에 1개만 넣어야 되고
  //for을 2번 돌리면 좀 효율 떨어지긴하는데 2+1 이나 1+3이나 같은수면 안들어가면 되고 
  //length 만큼 에서 -1 만큼 빼야 j도 돌릴수 가 있다 왜냐면 j 는 i에서 1 한 다음수 써야되니까  
  
 for (let i = 0; i< numbers.length-1; i++){
     for(let j = i+1 ; j<numbers.length; j++){
         let result = numbers[i] + numbers[j];
         if(results.indexOf(result) ===-1){
             results.push(result)
         }
     }
 }
    return results.sort((a,b)=>a-b)
    
}
```
