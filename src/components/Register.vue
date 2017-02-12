<template>
  <div>
    <mu-paper class="pager">
      <div class="logo-container">
        <img src="../assets/logo.png">
      </div>
      <mu-text-field class="field-input" v-model="form.studentId" label="學號" hintText="請輸入學號" type="text" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.schoolPassword" label="校密碼" hintText="請輸入校密碼" type="password" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.username" label="使用者帳號" hintText="請輸入欲設定的帳號" type="text" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.password" label="使用者密碼" hintText="請輸入欲設定的密碼" type="password" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.rePassword" :errorText="error.rePassword" @blur="checkRePassword" label="再次輸入使用者密碼" hintText="請再次輸入欲設定的密碼" type="password" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.email" label="信箱" hintText="請輸入信箱" type="email" labelFloat/><br/>
      <div class="button-group">
        <mu-raised-button label="重填" class="demo-raised-button button-first" @click="resetForm"/>
        <mu-raised-button label="送出" class="demo-raised-button button-last" primary @click="sendForm"/>
      </div>
    </mu-paper>
    <mu-dialog :open="progressDialog" title="處理中" :dialogClass="[dialogClass]">
      <mu-circular-progress :size="80"/>
    </mu-dialog>
    <mu-dialog title="訊息" :open="resultDialog" :dialogClass="[dialogClass]">
      <h3>{{ dialogContent }}</h3>
      <mu-flat-button label="確定" slot="actions" primary @click="resultDialogClose"/>
    </mu-dialog>
  </div>
</template>
<script type="es6">
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
          rePassword: ''
        },
        progressDialog: false,
        resultDialog: false,
        dialogClass: 'dialog',
        dialogContent: ''
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
        this.$http.post( 'http://'+this.serverIP+'/formFill', data).then(function (response) {
          this.progressDialogClose();
          var $ = this;
          if(response.ok) {
            this.dialogContent = "申請成功！";
          }
          this.resultDialogOpen();
        }, function (response) {
          console.log('error');
        });
        setTimeout( this.checkIfTimeOut, 2000);
      },
      resetForm () {
        for(var field in this.form)
          this.form[field] = '';
      },
      checkIfTimeOut () {
        if(this.progressDialog) {
          this.dialogContent = "連線逾時，請重新操作一次！";
          this.progressDialogClose();
          this.resultDialogOpen();
        }
      },
      checkRePassword () {
        if( this.form.rePassword != this.form.password) {
          this.error.rePassword = '兩次輸入的密碼不相符';
        } else {
          this.error.rePassword = '';
        }
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
      }
    }
  }
</script>
<style>
  .pager {
    width: 400px;
    margin: 12px auto 12px calc(50% - 200px);
  }
  @media screen and (max-width: 426px) {
    .pager {
      margin: 12px;
      width: auto;
    }
  }

  .logo-container {
    padding: 12px;
  }

  .logo-container img {
    width: 100px;
  }

  .field-input input {
    height: 34px;
  }

  .button-group {
    padding: 0px 6px 12px 6px;
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
