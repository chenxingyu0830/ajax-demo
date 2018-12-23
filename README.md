# ajax-dome
手写一个AJAX
```
let request = new XMLHttpRequest()
request.open('POST','/xxx')
request.send()
request.onstatechange = ()=>{
  if(request.readyState === 4){
    if(request.status >=200 && request.status <300){
      console.log('说明请求成功')
      let string = request.responseText
      let object = request.JSON.parse(string)
    }else if(request.status > 400){
      console.log('说明请求失败')
    }
  }
}
```
