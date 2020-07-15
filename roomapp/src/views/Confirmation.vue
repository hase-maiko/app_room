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
      <fa icon="eye" class="passVisible fa-fw" />
      <fa icon="eye-slash" class="passHidden fa-fw" />
    </span>
          <button @click="signUp">登録</button><br>

          <router-link :to="{
                      name: 'User',
                      params: { name: userName,
                                mail: userMailAddress,
                                pass: userPassword,
                                image: userImage}
                    }">修正</router-link>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'Confirmation',
  // data()
  data() {
    return {
      isActive: false,
      dummyPass: "",
      userImage: this.$route.params.image,
      userName: this.$route.params.name,
      userMailAddress: this.$route.params.mail,
      userPassword: this.$route.params.pass,
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

    $(".js-toggle-password").click(function () {
      // iconの切り替え
      $(this).children().toggleClass("passHidden passVisible");
    });
  },
  // methods
  methods: {
    active: function () {
      this.isActive = !this.isActive;
    } ,
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.userMailAddress, this.userPassword)
 .then(
        // 成功時の処理
      )
      .catch(
        // エラー時の処理 
        alert("el")
      )
    }









  }
};
</script>

<style>
/* パスワード切り替え */
.passHidden {
  display:none;
}
.passVisible {
  display: inline;
}

</style>