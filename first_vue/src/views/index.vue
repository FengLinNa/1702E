<template>
    <div>   
        <div>{{msg}}</div>
        <ul>
            <li v-for="(item, index) in arr">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: 'Hello Vue',
            arr: [1,2,3,4,5,6]
        }
    },
    mounted(){
        // setInterval(()=>{
        //     this.msg = 'Hello Vue + '+ +new Date()/1000
        // }, 1000)
        setInterval(()=>{
            // this.arr.push(this.arr.length+1);
        }, 1000)
    }
}
</script>


<style lang="">
    
</style>