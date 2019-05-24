// 发起一个登陆请求
export function doLogin(params){
  return fetch('/login', {
    body: JSON.stringify(params),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}


// 获取正在热映
export function getHotList(){
  return fetch('/api/ajax/movieOnInfoList')
  .then(response => response.json())
}
