#yeu

```javascript
// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');
let btn = document.getElementsByTagName("button")[0];
let textResult = document.querySelector('#text');


console.log(11);

btn.onclick = function(){

   if(textResult.style.color=="red"){
      textResult.style.color="blue";
   }else{
      textResult.style.color="red";
   }
};
```
