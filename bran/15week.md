
```javascript


```


https://programmers.co.kr/learn/courses/30/lessons/60057?fbclid=IwAR06VCxFFYZdqqhX56h79STbtoA8r_OsWT58g-GkAzTVx_K5pVfKfnEHzQ8
```javascript
function solution(s) {
    var answer = 0;
    let strings = [];
    
    //문자열 길이 1인 경우 - test case for 5
        if (s.length === 1) return 1;
    
    // 압출할 문자가 1부터 시작. 압출수 있는 문자가 최대 절반까지 가능
    for(let i=1; i<= parseInt(s.length/2); i++) {
        
        let count = 1; // start
        let temp_str = '';
        
        
        
        // 최대 압출수 있는 문자열을 만들고 비교
        for(let j=0; j< s.length; j+=i) {
            let current = s.substr(j, i); // a,a,b,b,a,c,c,aa,bb,ac,cc,aab,bac,cc, 4...
            let next = s.substr(j+i, i)
            
            //console.log('currnet: ' + current + ' ' + 'next: ' + next)
            
            // 만약 짜른 뒷 문자열과 현재 문자열이 똑같을 경우, 카운트를 증가
            if(current === next) {
                count++;
            } else {  // 그렇지 않다면, temp_str에 자른 문자열을 더 해준다.
                // 카운드가 2 이상이면, 숫자 + 문자열 붙히기. 
                // 다시 카운드 1로 돌려놓기
                
                temp_str = count > 1? temp_str + count + current : temp_str + current
                count = 1; // 다시 1로 세팅
            }  
        }
         //console.log(temp_str); // 압축된 str확인할수 있음
        strings.push(temp_str.length)
    }
    
    return Math.min(...strings);
}

// 1. "aabbaccc", 2a2ba3c => 7
// 2. "ababcdcdababcdcd", => 2ababcdcd => 9
// 3. "abcabcdede"	=> 2cut/ abcabc2de => 9? or
// "abcabcdede"	=> 3cut/ 2abcdede => 8

// 4. "abcabcabcabcdededededede" => 
// 2cut => abcabcabcabc6de
// 3cut => 4abcdededededede => 
// 4cut => abcabcabcabc3dede => 
// 6cut => 2abcabc2dedede => 14

// 5. "xababcdcdababcdcd"	 => 17, cannot cut
```
