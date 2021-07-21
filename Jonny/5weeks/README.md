//https://yeu.kr/4TWp0#js
```javascript
function solution(string, start, length) {
   let answer = '';
   
   for(let i = start; i < length; ++i)
   {
      if(i > string.length){
         return answer;
      }
         
      answer += string[i];
   }

   return answer;
}
```

//https://programmers.co.kr/learn/courses/30/lessons/12912?language=cpp
```c++
#include <bits/stdc++.h>

using namespace std;

long long solution(int a, int b) {
    long long answer = 0;
    if(a > b){
        int temp = a;
        a = b;
        b = temp;
    }
    
    for(int i = a; i <= b; ++i)
        answer += i;
    return answer;
}
```
