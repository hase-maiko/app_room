<template>
  <div class="user">
    <h1 class="js-title">ユーザ登録ページ</h1>
    <form>
    <div class="form-group">
      <label for="name">ユーザ名</label>
      <input type="text" class="form-control" id="name">
      <br>

      <label for="pass">パスワード(8文字以内)</label>
      <input type="password" name="pass" size="10" maxlength="8" id="pass">
      <span class="field-icon">
        <i toggle="password-field" class="mdi mdi-eye toggle-password"></i>
    </span>
    </div>
    </form>
  </div>
</template>


<script>
export default {
  mounted: function() {
    $('.js-title').css('font-size','50px');
  }
}
</script>