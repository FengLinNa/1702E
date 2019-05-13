// console.log(123)
console.log(456)
import '@/assets/font/iconfont.scss';

import Img from '@/assets/img/IMG_0082.JPG';
import Icon from '@/assets/img/icon.png';

import $ from 'jquery';

import '@/utils/index.js'

let ele = document.createElement('img');
ele.src = Img;
document.body.append(ele);



let icon = document.createElement('img');
icon.src = Icon;
document.body.append(icon);