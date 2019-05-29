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


// 获取最受期待
export function getExpectList(params){
  return fetch(`/api/ajax/mostExpected?ci=1&limit=10&offset=${params.offset}&token`)
  .then(response => response.json())
}


// 获取城市列表
export function getCityList(){
  return fetch('/api/dianying/cities.json')
  .then(response => response.json())
}


// 获取影片详情
export function getMovieDetail(id){
  return fetch('/api/ajax/detailmovie?movieId='+id)
  .then(response => response.json())
}
