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
