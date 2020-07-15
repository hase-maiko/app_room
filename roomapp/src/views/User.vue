<template>
  <div class="user" id="demo">
    <h1 class="js-title">ユーザ登録ページ</h1>
      <form action="">
        <div class="form-wrap">
          <!-- 画像選択 -->
          <div v-if="dataUrl">
            <div id="image-preview" class="imagePreview">
              <img :src="dataUrl" v-if="dataUrl" class="previewImg">
            </div>
          </div>
          <div v-else class="imageSelect imagePreview">
            <div class="defaultImg"></div>
            <input type="file" id="image" accept="image/*" @change="readImage">
            <label for="image" class="imageLabel">画像をアップロード</label>
          </div>
          <!-- 画像選択 -->
          <!-- ユーザ名 -->
          <div class="form-clm">
            <label for="name">ユーザ名</label><br>
            <input type="text" v-model="userName" class="form-control" id="name">
          </div>
          <!-- ユーザ名 -->
          <!-- メールアドレス -->
          <div class="form-clm">
            <label for="mail-address">メールアドレス</label><br>
            <input type="text" v-model="userMailAddress" class="form-control" id="name">
          </div>
          <!-- メールアドレス -->
          <!-- パスワード -->
          <div class="form-clm">
            <label for="pass">パスワード(8文字以内)</label><br>
            <input type="password" v-model="userPassword" name="pass" maxlength="8" id="pass">
            <span class="field-icon js-toggle-password"><fa icon="eye" class="passVisible fa-fw" /><fa icon="eye-slash" class="passHidden fa-fw" /></span>
          </div>
          <!-- パスワード -->
          <router-link :to="{
            name: 'Confirmation',
            params: { name: userName,
                      mail: userMailAddress,
                      pass: userPassword,
                      image: dataUrl}
          }">登録確認画面</router-link>
        </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'User',

  // data()
  data() {
    return {
      dataUrl: null,
      file: null,
      // userName: "",
      // userMailAddress: "",
      // userPassword: "",

      userImage: this.$route.params.image,
      userName: this.$route.params.name,
      userMailAddress: this.$route.params.mail,
      userPassword: this.$route.params.pass,


    };
  },
  // mounted
  mounted: function() {
    // パスワードの表示・非表示切替
    $(".js-toggle-password").click(function () {
      // iconの切り替え
      $(this).children().toggleClass("passHidden passVisible");
      // 入力フォームの取得
      let input = $(this).prev("input");
      // inputtype切替
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  },
  // methods
  methods: {
    // 画像読み込み
    readImage() {
      const inputImage = document.getElementById('image');
      if (inputImage.files.length === 0) {
        return;
      }
      this.file = inputImage.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.dataUrl = e.target.result;
      }
      reader.readAsDataURL(this.file);
    },
  }
};
</script>
<style>
/* フォームのデザイン */
.form-wrap {
  width: 270px;
  max-width: 90%;
  margin: 0 auto;
  text-align: left;
}

/* パスワード切り替え */
.passHidden {
  display:none;
}
.passVisible {
  display: inline;
}

/* 画像取得 */
.deleteImg,
.imageLabel {
    text-align: center;
    display: inline-block;
    width: 100%;
}
.imageSelect > input {
  display:none; /* アップロードボタンのスタイルを無効にする */
}

.previewImg,
.defaultImg {
  display: block;
  height: 100px;
  width: 100px;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;
}
.defaultImg {
  background: #ccc;
}
.deleteImg {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;

  visibility: visible;
}

</style>