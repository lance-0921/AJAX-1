
// getCSS.onclick = ()=>{
//     const request = new XMLHttpRequest()
//     request.open('GET','/style.css')
//     request.onload = () =>{
//         //创建style标签
//         const style = document.createElement('style')
//         //填写style内容
//         style.innerHTML = request.response
//         //插到头里面
//         document.head.appendChild(style)
//     }
//     request.onerror = () =>{
//         console.log('加载失败')  
//     }
//     request.send()
// }
// onerror没有很好的匹配AJAX，因为AJAX在onload、onerror后面出现,onload、onerror主要用于监听js、img等
//监听AJAX不会触发onerror的内容，而是将服务器的错误提示信息渲染到页面中



getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css',true)  // readyState===1 网址：https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
    request.onreadystatechange = () =>{
        if(request.readyState===4 )
        if(request.status===200){
            //创建style标签
            const style = document.createElement('style')
            //填写style内容
            style.innerHTML = request.response
            //插到头里面
            document.head.appendChild(style)    
        }else{
            alert('加载失败')
        }
        
    }
    request.send()   //readyState===2 
}

getJS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js',true)
    request.onreadystatechange = ()=>{
       // console.log(request.readyState)
        //下载完成,但不知道是成功了200，还是失败了404
        if(request.readyState === 4  ){
            if(request.status === 200) {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
            }else{
            alert('加载失败')
            }
        }
    }
    request.send()

}

getHTML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html',true)
    request.onreadystatechange = ()=>{
       // console.log(request.readyState)
        //下载完成,但不知道是成功了200，还是失败了404
        if(request.readyState === 4  ){
            if(request.status === 200) {
        const html = document.createElement('html')
        html.innerHTML = request.response
        document.body.appendChild(html)
            }else{
            alert('加载失败')
            }
        }
    }
    request.send()

}

getXML.onclick=()=>{
    const request = new XMLHttpRequest()
    method = "GET"
    url = "/4.xml"
    request.open(method,url,true)   //readyState ===1
    request.onreadystatechange = ()=>{
        //console.log(request.readyState)
        //下载完成,但不知道是成功了200，还是失败了404
        if(request.readyState === 4  ){
            if(request.status === 200) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent  //获取数组的第一个元素
                console.log(text.trim())  //.trim() 去掉空格
            }else{
                alert('加载失败')
            }
        }
    }
    request.send()  //readyState ===2
}

getJSON.onclick=()=>{
    const request = new XMLHttpRequest
    request.open("GET","/5.json",true)
    request.onreadystatechange=()=>{
        if(request.readyState ===4 && request.status ===200){
            //console.log(request.response)
            const object = JSON.parse(request.response)   //parse解析JSON
            myName.textContent = object.name  
        }
    }
    request.send()
}

let n = 1
getPage.onclick=()=>{
    const request = new XMLHttpRequest
    request.open("GET",`/page${n+1}.json`,true)
    request.onreadystatechange=()=>{
        if(request.readyState ===4 && request.status ===200){
            //console.log(request.response)
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n+=1
        }
    }
    request.send()
}
