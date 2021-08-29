## API통신을 해보자

### https://yeu.kr/jfyFM#js

```js
async function solution(url, key) {
  const res = await fetch(url);
  const data = await res.json();

  return data[key];
}
```
