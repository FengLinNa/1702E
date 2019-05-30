export let getData = function(){
  return fetch('/api/data').then(res=>res.json())
}
