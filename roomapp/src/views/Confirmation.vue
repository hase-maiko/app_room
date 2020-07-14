<template>
  <div class="user" id="demo">
    <h1 class="js-title">登録内容確認ページ</h1>

    <img :src="$route.params.image" class="previewImg">

    <p>ユーザ名</p>
    {{ $route.params.name }} 

    <p>メールアドレス</p>
    {{ $route.params.mail }} 

    <p>パスワード</p>
    <p v-if="isActive">{{ $route.params.pass }} </p>
    <p v-else id="password">{{ dummyPass }} </p>
    <span v-on:click="active" class="js-toggle-password">
    <!-- <span v-on:click="passToggle" class="js-toggle-password"> -->
      <fa icon="eye" class="passVisible fa-fw" />
      <fa icon="eye-slash" class="passHidden fa-fw" />
    </span>
  </div>
</template>
<script>
export default {
  name: 'Confirmation',
  // data()
  data() {
    return {
      isVisibility: true,
      isActive: false,
      userPassword: this.$route.params.pass,
      dummyPass: ""
    };
  },
  // mounted
  mounted: function() {
    // パスワードの文字数取得
    var text = this.userPassword;
    var str =  text.length;
    // 文字数の分だけ * を出力
    var dummyPassArray = [];
    for(let i = 0 ; i < str;  i++ ){
      dummyPassArray.push('*');
    }
    // パスワードを*に変更
    this.dummyPass = dummyPassArray.join("");


  },
  // methods
  methods: {
    active: function () {
      this.isActive = !this.isActive;
    } 
  }
};
</script>

<style>
</style>