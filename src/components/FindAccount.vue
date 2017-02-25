<template>
  <div>
    <mu-paper class="pager-400">
      <mu-text-field class="field-input" v-model="form.studentId" :errorText="error.studentId" @blur="checkStudentId" label="學號" hintText="請輸入學號" type="text" labelFloat/><br/>
      <mu-text-field class="field-input" v-model="form.schoolPassword" label="校密碼" hintText="請輸入校密碼" type="password" labelFloat/><br/>
      <div class="button-group">
        <mu-raised-button label="重填" class="demo-raised-button button-first" @click="resetForm"/>
        <mu-raised-button label="送出" class="demo-raised-button button-last" primary @click="checkFieldFormat"/>
      </div>
    </mu-paper>
  </div>
</template>
<script>
  export default {
    name: 'FindAccount',
    data () {
      return {
        form: {
          studentId: '',
          schoolPassword: ''
        },
        error: {
          studentId: ''
        }
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
      }
    }
  }
</script>
<style>

</style>
