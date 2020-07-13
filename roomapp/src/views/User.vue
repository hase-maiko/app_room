<template>
  <div class="user">
    <h1 class="js-title">ユーザ登録ページ</h1>
    <form>
      <div class="form-group">
        <p class="form-clm">
          <label for="name">ユーザ名</label>
          <input type="text" class="form-control" id="name">
        </p>
        <p>
          <label for="pass">パスワード(8文字以内)</label>
          <input type="password" name="pass" size="10" maxlength="8" id="pass">
          <span class="field-icon js-toggle-password"><fa icon="eye" class="passVisible fa-fw" /><fa icon="eye-slash" class="passHidden fa-fw" /></span>
        </p>
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
  }
}
</script>
<style>
.passHidden {
  display:none;
}
.passVisible {
  display: inline;
}
</style>