# Yeu 문자열 시작위치 찾기
```javascript 
function solution(str, find) {
   // RegExp, String, Array 관련 내장함수는 사용할 수 없습니다
   let answer = -1;
   let convertString ='';
   for(let i = 0; i<str.length; i++){
      for(let j = 0; j<find.length; j++){
        convertString = convertString+ str[i+j];
      }
      if(convertString === find){
       answer = i;
      }
    convertString='';
   }
 return answer;
}
```
# 프로그래머스 KaKao 2021 거리두기 문제
#### (조건 1개가 잘 안맞아서 완전 정답이아님)

```javascript
function solution(places) {
    //결국 최대한 사람수을 걸러서 비교를한다고 해도
    //사람끼리의 모든 경우의 수를 조합해야 하기때문에 너비우선 탐색이냐 깊이우선 탐색이냐를 결정해야할듯?
    //결국 2중 포문을 돌리거나 그래야 할듯 한데 흠..
    const manhetn = (p1,p2,matrix,asnwer)=>{
        //멘헤튼 거리 조건
     if(Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]) <=2 && p1 !==p2){
         //문제는 3번째 파티션 조건이 잘 안맞는데 
         if(
             (matrix[p1[1]+1] && matrix[p1[0]][p1[1]+1] ==="X")||
             (matrix[p1[1]-1] && matrix[p1[0]][p1[1]-1]==="X")||
             (matrix[p1[0]+1] && matrix[p1[0]+1][p1[1]]==="X")||
             (matrix[p1[0]-1] && matrix[p1[0]-1][p1[1]]==="X")//상하좌우
         )
         {
             asnwer.push(0);
         }else {
             asnwer.push(1);
         }
     }else {
         asnwer.push(0);
     }  
        return asnwer;
    }

    //파티션으로 막혀있으면 거리랑 상관없이 ok
    //맨해든 거리가 결국엔 2칸 얘기 
    //배열로 주니까 각대기실은 map으로 될거고  v
    //내부에 2중배열을 이용해서 해야되는데 
    //고민 지금 2차원 배열을 행렬로 만들어야 하나 v
    //즉, p인 애들끼리 검사
    //맨헤튼 거리가 2이하인애들만 골라서 파티션 검증하면 되겠네v
    //맨헤튼 거리가 2인경우엔 파티션 놓는 방법이 제한적 v
    //파티션은 이 사람들 사이에 파티션있으면 문제가 없어짐 v
    
    const positionArray = [];
    let Arr;
    let answer = [];
    let result = [];
    for(let i = 0; i<places.length; i++){
        const matrix =places[i].map(place => place.split(''))
        //matirx로 만들었으니 이제 p인 녀석의 행렬 좌표값
        matrix.forEach((element,indexX) => element.filter((state,indexY)=>{
            if(state ==='P'){
                positionArray.push([indexX,indexY])//행열은 구분이 되야할것같음
            }
        }))
        for(let i = 0; i < positionArray.length; i++ ){
            for(let j = 0; j < positionArray.length; j++){
                answer = manhetn(positionArray[i],positionArray[j],matrix,answer)
            }
        }
        //여기서 하나라도 1이있으면 return 0
        result.push(answer.includes(1) ? 0: 1)
        answer.length = 0;
        positionArray.length = 0;
    }
    
    return result;   
}
```
