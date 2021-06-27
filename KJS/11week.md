# 프로그래머스 

```javascript
function solution(name) {
   
   const nameArr= name.split(''); //["J","E","R"...];
   //각 알파벳 마다 비용을 알아야함
   const cost = nameArr.map(name=>name.charCodeAt(0) - 65);
   //포인트가 위아래로 비교해서 제일 가까운거 를 찾아야해 그럼 어느부분까지는 내리는게 더 이득이겠네 
   //0~25까지니까 0~12까지는 올리는게 13~25까지는 내리는게 맞으니까 13부터는 26(개수) 를 빼면 이득
   const convertCost = cost.map(cost =>cost < 12 ? cost : 26-cost);
   const convertReduce = convertCost.reduce((acc,cur)=> {
       return acc + cur
   },0)
   //이동비용 이거 좀더 오른쪽으로가는게 이득인지 왼쪽으로 가는게 이득인지 알아야대
   //왼쪽, 오른쪽으로만 가는게아니라 어느 특이점이오면 왼쪽 오른쪽이 나은지 판별해야되는데
   //A가 연속이건 단일이건 그다음수까지 가는 길이가 오른쪽으로 갔을시 왼쪽으로갔을시 값 비교해야할듯 
   
   //비교하는 함수 
   const costF = (cost,convertCost,num,currIndex,test) =>{
       let number = num;
     
       //지금꺼에 다음꺼 까지 있으면 A일경우 다시 재귀 돌리고 아니면 B면 좌우 길이 비교
       if(convertCost[number+test]){
           let rightcost =  convertCost.indexOf(convertCost[number+test]) - currIndex +1
           let leftcost  =  convertCost.length -1 - (convertCost.indexOf(convertCost[number+test]) - currIndex  ) 
           cost = rightcost > leftcost ? leftcost : rightcost
         //return 할거는 비용 
           return cost;
       }
       number =number+1 ;
       if(number >= convertCost.length) return cost;
       return costF(cost, convertCost,number,currIndex,test)
   }
   
   const moveCost = convertCost.reduce((acc,cur,index) => {
      //다음 수가 A이면 돌아가든지 말든지해야되니까 
          if(!convertCost[index] && !convertCost[index+1] && convertCost.length > index+1 ){
           return acc
           }
           else if(!convertCost[index+1] && convertCost.length > index+1 ){
           
           let cost = 0;
           //A일경우
         const result =  costF(cost, convertCost,1 ,convertCost.indexOf(cur),index)
       
           return acc + result;
           }else if(convertCost[index+1] && convertCost.length > index+1 ){
            return acc +1 ;
           } 
       return acc;
   },0)
    return convertReduce + moveCost;
    
}
```
완벽하게 못풀음 테스트 케이스에서 절반만 맞음

# yeu 
```javascirpt
// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');

let button = container.querySelectorAll('button');
let spanCount = container.querySelectorAll('span')
let count = 0;
button[0].addEventListener('click',()=>{
   count ++;
   spanCount[0].innerText=count;
})
```
