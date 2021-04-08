# yeu

```javascript 
function solution(line, circle, screensize, width, centerx, centery) {

   //너비 3 높이 2 => 5
   const widthX = (width / 6) * 3
   const widthY = (width /6) * 2
   console.log(widthY, centery)

   line(centerx - widthX  , centery  -widthY , centerx + widthX , centery - widthY);
   line(centerx -widthX, centery  + widthY , centerx + widthX , centery + widthY)
   line(centerx -widthX ,centery  - widthY , centerx - widthX , centery + widthY)
   line(centerx + widthX ,centery  - widthY , centerx + widthX , centery + widthY)
  

   circle(centerx, centery, 0.5);
}

```
