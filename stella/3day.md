# programmers
```
function solution(numbers) {
    const answer = [];
     for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i+1; j < numbers.length; j++){ 
            // 두 인자를 더해 sum에 저장
            const sum = numbers[i] + numbers[j];
            // 요소가 배열에 존재하는지 확인하고 배열을 업데이트
            if(answer.indexOf(sum) == -1){ //answer[]에 sum의 값이 없으면
                    answer.push(sum); //answer[]에 sum값을 추가한다.
            }
        }
    }
    
    answer.sort((a,b)=>a-b);
    return answer;
}
```

# yeu
```
function solution(line, circle, screensize, width, centerx, centery) {

   /*---------------------------------------
   line
     선을 화면에 그리는 함수입니다
     line(시작점X좌표, 시작점Y좌표, 끝점X좌표, 끝점Y좌표)
   ------------------------------------------*/
line(centerx - (width / 6) * 3  , centery  -(width /6) * 2 , centerx + (width / 6) * 3 , centery - (width /6) * 2);
   line(centerx -(width / 6) * 3, centery  + (width /6) * 2 , centerx + (width / 6) * 3 , centery + (width /6) * 2)
   line(centerx -(width / 6) * 3 ,centery  - (width /6) * 2 , centerx - (width / 6) * 3 , centery + (width /6) * 2)
   line(centerx + (width / 6) * 3 ,centery  - (width /6) * 2 , centerx + (width / 6) * 3 , centery + (width /6) * 2)
  
   
   


   /*---------------------------------------
   circle
     원을 화면에 그리는 함수입니다
     line(원중심점X, 원중심점Y, 반지름)
   ------------------------------------------*/
   circle(centerx, centery, 0.5);

   /*---------------------------------------
   screensize
     {"width":100,"height":50}
     와 같이 생긴 모습의 객체입니다.
     이것은 화면의 너비와 높이 정보를 담고 있습니다.
     너비 값에 접근하고자 한다면 screensize.width 라고 하면 되고
     높이 값에 접근하고자 한다면 screensize.height 라고 하면 됩니다
   ------------------------------------------*/


}

```
