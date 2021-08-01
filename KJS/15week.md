# 프로그래머스  124나라의 숫자 
https://programmers.co.kr/learn/courses/30/lessons/12899

```javascript 

function solution(n) {
    //1 ,2 , 4 ,11 ,12, 14 ,21 ,22, 24 이렇게 한다는거자너 
    //1,2,4 쓰고 붙이고 
    let target = n ;
    let mod = 0;
    let answer= '' 
    while(target !== 0){
    //1,4,7 일때 나머지가 1일때 끝자리 1 
    
    //2,5,8 일때 나머지가 2일때 끝자리 2
    
    //3,6,9 일때 나머지가 0일때 끝자리 4
    
    //3개씩 반복이니까 3진법아닌 3진법 개념인가 싶음 
    //나머지나오면 뒤에 붙이고 몫이 3보다 크면 계속 반복해서 붙이면 될거같은데 
    
    
    //문제는 3,6,9 3배수를 제외한 나머지는 나머지로 되는데 나머지가 없이 딱 떨어질때 자릿수가 틀림 
   
    
    mod = target % 3;  //나머지
   
    if(mod === 1){
    answer =   '1' + answer;
    
    }else if ( mod === 2){
    answer =  '2'+ answer;
    
    }else if ( mod === 0){
    answer =  '4'+ answer;
    target--;
    
    }
    target = parseInt(target / 3); //몫
    //여기서 반복적으로 나머지가 0일때 꼭 4진법마냥 돌아감 
    //자리가 이상해 더 붙음 근데 몫이 더 다음 단계로넘어감 전단계로 만들어줘야함
   }
  //효율성 콘솔로그 지우니까 통과하네;;
   return answer;
}

```
![image](https://user-images.githubusercontent.com/43168019/127767413-5e4aa063-1eb6-46d3-8bba-2cd1f7bd5157.png)

