<template>
  <div>
    <mu-paper class="guide-pager">
      <h2>個人伺服器空間操作說明</h2>
      <mu-divider style="height: 2px;"/>
      <div class="demo-vsteper-container markdown-body">
        <mu-stepper :activeStep="activeStep" orientation="vertical">
          <mu-step>
            <mu-step-label>
              下載ssh連線工具
            </mu-step-label>
            <mu-step-content>
              <ul>
                <li>Windows: <a href="http://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">PuTTY [ 點此下載 ] </a></li>
                <li>OS: 使用系統內建 <code>terminal</code> 即可</li>
              </ul>
              <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              使用連線工具進行連線
            </mu-step-label>
            <mu-step-content>
              <ul>
                <li>Windows:
                  <br>① 開啟 <code>PuTTY</code>
                  <br>② IP輸入 <code>你設定的帳號@cscc.hsexpert.net</code>
                  <br>③ Port輸入 <code>22</code>
                  <br>④ 點擊 <code>確定</code>
                  <br>⑤ 輸入 <code>你設定的密碼</code></li>
                <li>OS:
                  <br>① 開啟 <code>terminal</code>
                  <br>② 輸入 <code>ssh 你設定的帳號@cscc.hsexpert.net</code>
                  <br>③ 按下鍵盤 <code>enter</code>
                  <br>④ 輸入 <code>你設定的密碼</code></li>
              </ul>
              <mu-raised-button label="下一步" class="demo-step-button" @click="handleNext" primary/>
              <mu-flat-button label="上一步" class="demo-step-button" @click="handlePrev"/>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              完成 - 請詳讀說明
            </mu-step-label>
            <mu-step-content>
              <p>
                這是個只屬於你的獨立伺服器空間，你可以自由使用、安裝你開發所需的套件及檔案。
                <br>另外，伺服器內的<strong> 任何操作均會留下紀錄</strong>，因此呼籲使用者，執行操作時請三思，請勿使用本伺服器進行盈利或散佈、下載與課程無關檔案，甚至可能觸犯法律之行為，切勿以身試法。
              </p>
              <mu-raised-button label="完成" class="demo-step-button" @click="handleNext" primary/>
              <mu-flat-button label="上一步" class="demo-step-button" @click="handlePrev"/>
            </mu-step-content>
          </mu-step>
        </mu-stepper>
        <p v-if="finished">
          如果還想重看一次 <a href="javascript:;" @click="reset">點這裡</a> 可以重置
        </p>
      </div>
    </mu-paper>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeStep: 0
      }
    },
    computed: {
      finished () {
        return this.activeStep > 2;
      }
    },
    methods: {
      handleNext () {
        this.activeStep++;
      },
      handlePrev () {
        this.activeStep--;
      },
      reset () {
        this.activeStep = 0
      }
    }
  }
</script>
<style>
  .guide-pager {
    width: 600px;
    margin: 12px auto 12px calc(50% - 300px);
    padding: 12px;
  }
  @media screen and (max-width: 767px) {
    .guide-pager {
      margin: 12px;
      width: auto;
    }
  }

  .demo-vsteper-container{
    display: table;
    max-width: 480px;
    max-height: 500px;
    margin: 12px 12px;
    overflow: hidden;
    text-align: left;
  }

  .demo-step-button {
    margin: 12px 12px 12px 0px;
  }

  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
  }
</style>
