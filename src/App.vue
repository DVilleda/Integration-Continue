<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Button />
  <Button />
  <br />
  <br />
  <h1>SUPER MEGA BOUTTON</h1>
  <Message />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'
import Message from './components/Message.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button,
    Message
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
