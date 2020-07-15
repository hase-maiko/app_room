<template>
  <div class="home">
    <p id="view_day"></p>
    <p id="view_time"></p>
    <router-link to="/user">ユーザ登録</router-link><br>
    <!-- <router-link to="/confirmation">ユーザ登録確認</router-link> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted: function() {
    document.getElementById("view_day").innerHTML = getDay();
    document.getElementById("view_time").innerHTML = getTime();

    function getDay() {
      var now = new Date();
      var m = now.getMonth()+1; //１を足すこと
      var d = now.getDate();
      var day = m + "/" + d;
      return day;
    }
    function getTime() {
      var now = new Date();
      var hour = now.getHours();
      var min = now.getMinutes();
      var s = hour + ":" + min; 
      return s;
    }
  }
}
</script>
<style scoped>
  p {
    color: red;
  }
</style>
