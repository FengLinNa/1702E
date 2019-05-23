<template>
    <div>
        <span v-for="(item, index) in classes" @click="click(index)" :class="current==index?'active': ''">{{item}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            current: -1,
            classes:['1701A', '1701B', '1701C', '1702E', '1702F', '1702G'] 
        }
    },
    methods: {
        click(index){
            this.current = index;
        }
    }
}
</script>


<style>
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    span{
        border: 1px solid lightseagreen;
        flex: 1;
        padding: 10px;
        font-size: 12px;
    }
    span.active{
        background: pink;
    }
</style>