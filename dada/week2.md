#Yeukr - 토글을 구현해보자 

```javascript
let container = document.querySelector('#container');
let btn = document.querySelector('button');
let textColor = document.getElementById('text');

btn.onclick = () => {
   if(textColor.style.color == 'red'){
      textColor.style.color = 'blue';
   }
   else{
      textColor.style.color = 'red';
   }
   
   //textColor.style.color  = getComputedStyle(textColor.color == 'rgb(255, 0, 0)' ? 'rgb(0, 0, 255)' : 'rgb(255, 0, 0)';
}
```
