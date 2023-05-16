<template>
  <section class="s3">
      <div class="content">

          <div class="title">
              <span>申請白名單流程</span>
              <span>流程複雜是為了要給玩家們更好的遊戲體驗</span>
          </div>

          <div class="text">
              <div class="block">
                  <div class="">
                      <span>1</span>
                      <span></span>
                  </div>
                  <span>填寫申請</span>
                  <span>請至Discord#白名單申請教學索取申請表單</span>
              </div>

              <div class="block">
                  <div class="">
                      <span>2</span>
                      <span></span>
                  </div>
                  <span>表單登記</span>
                  <span>填寫完表單之後請到Discord#📋表單紀錄📋，登記我已填寫表單，我們才會受理</span>
              </div>

              <div class="block">
                  <div class="">
                      <span>3</span>
                      <span></span>
                  </div>
                  <span>等待審核</span>
                  <span>我們收到之後會開始審核，審核完畢會通知您</span>
              </div>

              <div class="block">
                  <div class="">
                      <span>4</span>
                      <span></span>
                  </div>
                  <span>安裝模組</span>
                  <span>通過後會給您【模組玩家】身分組，您就可以下載模組包並安裝</span>
              </div>

              <div class="block">
                  <div class="">
                      <span>5</span>
                      <span></span>
                  </div>
                  <span>大公告成！</span>
                  <span>感謝您的耐心操作，完成以上程序之後即可進入伺服器</span>
              </div>
          </div>
      </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.s3 {
  // background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('@/assets/img/home4.png') no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;
  color: #333;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
      display: flex;
      gap: 10px;
      width: 1040px;
      flex-direction: column;
  }

  .title {
      display: flex;
      gap: 10px;
      flex-direction: column;

      span:nth-child(1){
          font-size: 35px;
          font-weight: bold;
      }
  }

  .text {
      display: flex;
      gap: 10px;
      .block {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 30%;
  
          div {
              display: flex;
              align-items: center;

              // 外框
              span:nth-child(1) {
                  border: 1px solid #000000;
                  width: 70px;
                  height: 70px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 30px;
  
              }
              
              // 連接線
              span:nth-child(2) {
                  border: 1px solid rgba(0, 0, 0, 0.6);
                  height: 0;
                  flex: 1;
                  // width: 100%;
                  margin: 0 30px;
              }


          }
  
          span:nth-child(1) {
              font-size: 18px;
          }
          
          span:nth-child(3) {
              font-size: 15px;
          }

      }
  }

}
</style>