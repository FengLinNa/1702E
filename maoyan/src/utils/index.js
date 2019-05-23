import Cookie from 'js-cookie';

let key = 'token';
// 获取当前cookie里的token
export function getToken(){
  return Cookie.get('token');
}

// 设置token
export function setToken(token){
  return Cookie.set('token', token, { expires: 365 })
}
