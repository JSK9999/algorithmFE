<strong>프로그래머스문제</strong>

<script>
function solution(a, b) {
    let total=0;
    let days=["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    let mon=[31, 29, 31, 30, 31, 30,31, 31, 30, 31, 30, 31];
    
    for (let i=0;i<a-1;i++){
        total+=mon[i]
        
        
    }
    total+=b-1;
    
    var answer = days[total%7];
    return answer;
}
</script>

<strong>Yeu 문제</strong>

<html>

<head>
</head>

<body>
  <h2 id="title">반복되는 패턴을 찾아보자</h2>
  <div class="container">
    JS의 solution 함수의 인자로써 아래의 내용이 주어집니다<br />
    <article class="code">ABCDoABCDoABCDo</article>
    <br />
    위의 인자 값을 자세히 보면 반복되는 구간이 있습니다<br />
    ABCDo 가 계속 반복되는 모습이죠<br />
    <br />
    위와 같이 solution 함수로 인자가 들어왔을때 다음과 같이 리턴하도록 만들어주세요
    <article class="code">ABCDo</article>
  </div>
</body>

<script>
  
  
  
  
  
  
  </script>




</html>



