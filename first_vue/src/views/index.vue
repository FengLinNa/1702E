<template>
    <div class="wrap">   
        <!-- <div>{{msg}}</div> -->
        <ul>
            <li v-for="(item, index) in arr">{{item}}</li>
        </ul>  
    </div>
</template>

<script>
const randomWords = require('random-words');
import BScroll from 'better-scroll'

export default {
    data(){
        return {
            msg: 'Hello Vue',
            arr: []
        }
    },
    mounted(){
        this.arr.push(...randomWords(20))
       
        // 原生实现上拉加载
        // window.addEventListener('scroll', ()=>{
        //     // 获取屏幕高度和滚动距离
        //     let height = window.innerHeight + window.scrollY;

        //     // 获取ul的高度
        //     let ulHeight = document.getElementsByTagName('ul')[0].offsetHeight;
        //     if (height == ulHeight){
        //         console.log('到底了...')
        //         this.arr.push(...randomWords(5))
        //     }
        // });
        let scroll = new BScroll('.wrap', {
            pullUpLoad: {
                threshold: 10
            },
            pullingUp: ()=>{
                console.log('快到底了...')
            },
            probeType: 2
        })
    }
}
</script>


<style>
    html,body,div{
        height: 100%;
    }
    div{
        overflow: scroll;
    }
    ul,li,body{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li{
        height: 40px;
        border-bottom: 1px solid #333;
    }
</style>