// 获取用户
export let getUserList = ()=>{
  return fetch('/user/list').then(res=>res.json())
}

// 更新用户
export let updateUserInfo = params=>{
  return fetch('/user/update', {
    body: JSON.stringify(params),
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    }
  }).then(res=>res.json())
}

// 添加用户
export let addUser = params=>{
  return fetch('/user/add', {
    body: JSON.stringify(params),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  }).then(res=>res.json())
}

// 删除用户
export let deleteUser = params=>{
  return fetch('/user/delete', {
    body: JSON.stringify(params),
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  }).then(res=>res.json())
}
