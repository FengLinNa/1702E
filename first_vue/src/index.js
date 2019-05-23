import Vue from 'vue';


import Index from '@/views/index.vue';
import Count from '@/views/count.vue';
import Tab from '@/views/tab.vue';


new Vue({
    // 挂载的位置
    el: '#app',
    // 挂载根组件
    render: h=>h(Index)    
})


/** 
 * 作业
 * 1.用random-words生成英语单词
 * 2.每次滑动底部的时候加载英语单词
 * 
 * 用vue实现tab切换
 * 用vue实现加加减减
*/
