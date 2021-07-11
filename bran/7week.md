function solution(priorities, location) {
    var answer = 0;
    let arr = []
    let mine = priorities[location]; // 3 or 1
    

    // 1. 큰수 찾기 + array 정렬 큰순서대로. 예를 들어, [3,2,2,1]
    let newArr = priorities.sort((a,b) => b-a);
 
    // find index num in array 
    // compare 
    
     
    
    let pre = newArr.findIndex(mine);
    console.log(pre)
    
    
    
    
    
    // for(let p of newArr) {
    //     if(p === mine) {
    //         console.log(p)
    //     }
    // }
   
    
    
    // priorities.forEach(function(item) {
    //     if(mine === item) {
    //         console.log(item)
    //     }
    // })
    
    
    
    
    // location 내가 요청한 현재 대기목록 위치 
    
    
    // 내가 요청한 문서가 몇번 째로 인쇄되는지 리턴!
    return answer;
}
