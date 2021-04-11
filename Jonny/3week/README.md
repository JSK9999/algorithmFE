```javascript
function solution(line, circle, screensize, width, centerx, centery) {

   /*---------------------------------------
   line
     선을 화면에 그리는 함수입니다
     line(시작점X좌표, 시작점Y좌표, 끝점X좌표, 끝점Y좌표)
   ------------------------------------------*/
   line(centerx - width/2, centery - width/1.5/2, centerx+width/2, centery- width/1.5/2);
   line(centerx - width/2, centery + width/1.5/2, centerx+width/2, centery+ width/1.5/2);
   line(centerx - width/2, centery - width/1.5/2, centerx-width/2, centery+ width/1.5/2);
   line(centerx + width/2, centery - width/1.5/2, centerx+width/2, centery+ width/1.5/2);

   /*---------------------------------------
   circle
     원을 화면에 그리는 함수입니다
     line(원중심점X, 원중심점Y, 반지름)
   ------------------------------------------*/
   circle(centerx,centery, 0.5);

   /*---------------------------------------
   screensize
     {"width":100,"height":50}
     와 같이 생긴 모습의 객체입니다.
     이것은 화면의 너비와 높이 정보를 담고 있습니다.
     너비 값에 접근하고자 한다면 screensize.width 라고 하면 되고
     높이 값에 접근하고자 한다면 screensize.height 라고 하면 됩니다
   ------------------------------------------*/
   console.log('화면의 너비는 ' + screensize.width + '입니다');
   console.log('화면의 높이는 ' + screensize.height + '입니다');

}
```

```javascript
function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; ++i)
    {
        for(let j = 0; j < numbers.length; ++j)
        {
            if(i == j)
                continue;
            var temp = numbers[i] + numbers[j];
            var pos = answer.find(element => element == temp);
            if(pos == undefined)
                answer.push(temp);
        }
    }
    
    return answer.sort(function(a,b){
        return a-b;
    });
}
```
