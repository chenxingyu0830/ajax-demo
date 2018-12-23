myButton.addEventListener('click',(e)=>{
  let request = new XMLHttpRequest()
  request.open('get','http://localhost:8008/xxx')  //配置request
  request.send()
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log('请求响应都完毕了')
      console.log(request.status)
      if(request.status >= 200 && request.status < 300){
        console.log('请求成功')
        console.log(request.responseText)
        let string = request.responseText
        //  把符合JSON语法的字符串
        //  转换成JS对应的值
        let object = window.JSON.parse(string)
        //  JSON.parse 是浏览器提供的
        //  document.getElementById 是浏览器提供的
        console.log(typeof object)
        console.log(object)

      }else if(request.status >= 400){
        console.log('说明请求失败')
      }

    }
  }
})
