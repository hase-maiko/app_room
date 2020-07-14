<template>
  <div class="home">
    <p>現在時刻</p>
    <router-link to="/">Home</router-link> <br>
    <router-link to="/about">About</router-link><br>
    <router-link to="/user">ユーザ登録</router-link><br>
    <router-link to="/confirmation">ユーザ登録確認</router-link>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
  p {
    color: red;
  }
</style>
