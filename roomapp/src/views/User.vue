<template>
  <div class="user">
    <h1 class="js-title">ユーザ登録ページ</h1>
    <form>
      <div class="form-group">
        <!-- 画像選択 -->
        <div v-if="dataUrl" >
          <div id="image-preview" class="imagePreview">
            <img :src="dataUrl" v-if="dataUrl" class="previewImg">
          </div>
          <button type="button" @click="resetImage" class="deleteImg">画像を削除する</button>
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
          <input type="text" class="form-control" id="name">
        </div>
        <!-- ユーザ名 -->
        <!-- パスワード -->
        <div class="form-clm">
          <label for="pass">パスワード(8文字以内)</label><br>
          <input type="password" name="pass" size="10" maxlength="8" id="pass">
          <span class="field-icon js-toggle-password"><fa icon="eye" class="passVisible fa-fw" /><fa icon="eye-slash" class="passHidden fa-fw" /></span>
        </div>
        <!-- パスワード -->





      </div>
    </form>
  </div>
</template>


<script>
export default {
  mounted: function() {
    // パスワードの表示・非表示切替
    $(".js-toggle-password").click(function () {
      console.log("aaa");
      // iconの切り替え
      $(this).children().toggleClass("passHidden passVisible");
      // 入力フォームの取得
      let input = $(this).prev("input");
      // type切替
      if (input.attr("type") == "password") {
          input.attr("type", "text");
      } else {
          input.attr("type", "password");
      }
    });
  },
  name: 'setting',
  data() {
    return {
      dataUrl: null,
      file: null,
    };
  },
  methods: {
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
    resetImage() {
      this.dataUrl = null;
      this.file = null;
    },
  },
};
</script>
<style>
/* フォームのデザイン */
.form-group {
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

  /* width: 100%; */
  /* height: 100%; */
  border-radius: 50%;
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
}

</style>