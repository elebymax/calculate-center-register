<template>
  <div>
    <mu-paper class="register-pager">
      <div class="logo-container">
        <img src="../assets/logo2.png">
        <div class="top-bar"></div>
      </div>
      <mu-text-field class="field-input" v-model="form.studentId" :errorText="error.studentId" @blur="checkStudentId" label="學號" hintText="請輸入學號" type="text" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.schoolPassword" label="校密碼" hintText="請輸入校密碼" type="password" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.username" label="使用者帳號" hintText="請輸入欲設定的帳號" type="text" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.password" label="使用者密碼" hintText="請輸入欲設定的密碼" type="password" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.rePassword" :errorText="error.rePassword" @blur="checkRePassword" label="再次輸入使用者密碼" hintText="請再次輸入欲設定的密碼" type="password" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.email" :errorText="error.email" @blur="checkEmail" label="信箱" hintText="請輸入信箱" type="email" labelFloat/><br/>
      <div class="button-group">
        <mu-raised-button label="重填" class="demo-raised-button button-first" @click="resetForm"/>
        <mu-raised-button label="送出" class="demo-raised-button button-last" primary @click="checkFieldFormat"/>
      </div>
    </mu-paper>
    <mu-dialog :open="progressDialog" title="處理中" :dialogClass="[dialogClass]">
      <mu-circular-progress :size="80"/>
    </mu-dialog>
    <mu-dialog title="訊息" :open="resultDialog" :dialogClass="[dialogClass]">
      <p>{{ dialogContent }}</p>
      <mu-flat-button label="確定" slot="actions" primary @click="resultDialogClose"/>
    </mu-dialog>
  </div>
</template>
<script>
  export default {
    name: 'Register',
    data () {
      return {
        form: {
          studentId: '',
          schoolPassword: '',
          username: '',
          password: '',
          rePassword: '',
          email: ''
        },
        error: {
          studentId: '',
          rePassword: '',
          email: ''
        },
        check: {},
        progressDialog: false,
        resultDialog: false,
        dialogClass: 'dialog',
        dialogContent: '',
        isStatusOk: false,
      }
    },
    methods: {
      sendForm () {
        this.progressDialogOpen();
        var data = {
          studentId: this.form.studentId,
          schoolPassword: this.form.schoolPassword,
          username: this.form.username,
          password: this.form.password,
          email: this.form.email
        };
        this.$http.post('/users/add', data ).then(function (response) {
          this.progressDialogClose();
          var $ = this;
          if (response.status === 200) {
            this.dialogContent = response.body.message;
            this.isStatusOk = true;
          } else {
            this.dialogContent = '錯誤！' + response.body.message + '\n狀態碼：' + status;
          }
          this.resultDialogOpen();
        }, function (response) {
          this.progressDialogClose();
          this.dialogContent = '伺服器錯誤，請通知開發人員！';
          this.resultDialogOpen();
        });
        setTimeout(this.checkIfTimeOut, 30000);
      },
      resetForm () {
        for (var field in this.form)
          this.form[field] = '';
      },
      checkIfTimeOut () {
        if (this.progressDialog) {
          this.dialogContent = '連線逾時，請重新操作一次！';
          this.progressDialogClose();
          this.resultDialogOpen();
        }
      },
      checkStudentId () {
        var reg = /^\d{9}$/;
        if (reg.test(this.form.studentId)) {
          this.error.studentId = '';
        } else {
          this.error.studentId = '學號格式錯誤';
        }
      },
      checkRePassword () {
        if (this.form.rePassword != this.form.password) {
          this.error.rePassword = '兩次輸入的密碼不相符';
        } else {
          this.error.rePassword = '';
        }
      },
      checkEmail () {
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (reg.test(this.form.email)) {
          this.error.email = '';
        } else {
          this.error.email = '信箱格式錯誤';
        }
      },
      checkFieldFormat () {
        for (var field in this.form) {
          if (this.form[field] == '') {
            this.dialogContent = '欄位未填寫或格式錯誤，請重新確認！';
            this.resultDialogOpen();
            return;
          }
        }
        for (var field in this.error) {
          if (this.error[field] != '') {
            this.dialogContent = '欄位未填寫或格式錯誤，請重新確認！';
            this.resultDialogOpen();
            return;
          }
        }
        this.sendForm();
      },
      progressDialogOpen () {
        this.progressDialog = true;
      },
      progressDialogClose () {
        this.progressDialog = false;
      },
      resultDialogOpen () {
        this.resultDialog = true;
      },
      resultDialogClose () {
        this.resultDialog = false;
        window.location = './#/guide';
      }
    }
  }
</script>
<style>
  .register-pager {
    width: 400px;
    margin: 12px auto 12px calc(50% - 200px);
  }
  @media screen and (max-width: 426px) {
    .register-pager {
      margin: 12px;
      width: auto;
    }
  }

  .logo-container {
    padding: 12px;
  }

  .logo-container img {
    height: 80px;
    display: inline-block;
  }

  .top-bar {
    margin-left: calc(50% - 20px);
    height: 3px;
    width: 40px;
    background-color: #03a9f4;
  }

  .field-input input {
    height: 34px;
  }

  .button-group {
    padding: 6px 6px 18px 6px;
  }

  button.button-first {
    margin-right: 6px;
  }

  button.button-last {
    margin-left: 6px;
  }

  .dialog {
    width: auto;
    text-align: center;
  }

  .dialog .mu-circular-progress {
    padding-top: 1px;
  }
</style>
