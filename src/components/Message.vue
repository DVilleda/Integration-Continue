<template>
  <div>
    <button @click="changer" >Clique MOI !</button>
    <p v-show="visible"> Un message Secret...</p>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data: () => ({
      visible: false,
    }),
    methods:{
        changer(){
            if(this.visible === false){
                this.visible = true
            }else {
                this.visible = false
            }
        }
    }
  }
</script>
<style scoped>
p{
  display: block;
}
</style>