<template>
    <div>
        <button @click="add">+</button>
        <p>{{count}}</p>
        <button @click="e=>sub(e)">-</button>
    </div>
</template>


<script>
export default {
    data(){
        return {
            count: 0
        }
    },
    methods: {
        add(e){
            console.log('e...', e);
            this.count++;
        },
        sub(e){
            console.log('sub...', e);
            this.count--;
        }
    }   
}
</script>

<style>

</style>
