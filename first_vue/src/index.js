import Vue from 'vue';
import Index from '@/views/index.vue';

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
*/
