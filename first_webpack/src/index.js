import formatTime, {toThousands} from '@/util';

// import '@/scss/index.scss';

import kobe from '@/assets/kobe.jpg';
import dz from '@/assets/dz.png';

// 引入字体
import '@/assets/font/iconfont.css';

// 引入axios
import axios from 'axios';

// console.log('time...', formatTime, obj, obj.default)
let p = document.createElement('p');
document.body.appendChild(p);
setInterval(function(){
    p.innerText = formatTime(+new Date())
}, 1000);


// 实现一个千分符
let input = document.createElement('input');
document.body.appendChild(input);

let showNum = document.createElement('p');
document.body.appendChild(showNum);

// 添加input事件
input.addEventListener('input', function(e){
    showNum.innerText = toThousands(e.target.value);
})

// 绘制一张图片
document.getElementById('img1').src = kobe;
document.getElementById('img2').src = dz;

// 发起ajax请求
axios.post('/loader/list?a=1&b=2', {c:3,d:4}).then(res=>{
    console.log('res...', res);
})