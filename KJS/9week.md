# yeu 
```javascript 
function solution() {

   // 여기에 코드를 작성해주세요
   class ClassYouMade {
      constructor(first,second) {
         this.arr = [];
         this.first = first;
         this.second = second;
      }
      getValue () {
       	this.arr.push(this.first,this.second)
        
         return this.arr
      }
   }
   return ClassYouMade;
}
```

# 프로그래머스 
```javascript
function solution(array, commands) {
    const answer = [];
    
    for (let i =0; i<commands.length; i++){
        let arr= array.slice(commands[i][0]-1 , commands[i][1])
        arr.sort(function(a,b){
            return a-b;
        } );
        answer.push(arr[commands[i][2] -1]);
    }
    return answer;
}
```

![image](https://user-images.githubusercontent.com/43168019/121796721-3433dd00-cc56-11eb-8acc-8a70222e4192.png)
