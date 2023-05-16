<template>
  <section class="s2" id="s2">
      <div class="content">
          
          <div class="left">
              <div class="title">
                  <span>伺服器穩定運行</span>
              </div>
              <div class="text">
                  <span>❖ 本伺服器會隨著發展進度而結束 本季為2023第二季</span>
                  <span>❖ 營運時間:24H(每周五17:00重啟)</span>
                  <span>❖ 審核管道: 請至 Discord #白名單申請教學</span>
              </div>
          </div>

          <div class="right">
              <a href="https://www.mc-list.xyz/292/info" target="_blank">
                  <img src="https://image.mc-list.xyz/banner/10-292.png" alt="">
              </a>
          </div>
      </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.s2 {
  // background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('@/assets/img/home2.png') no-repeat;
  background-color: #fff;
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;
  color: #333;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  
  .content {
      display: flex;
      // flex-direction: column;
      gap: 20px;

      .left{
          // width: 40%;
          // 用margin把它往右頂
          // margin-left: auto;
          display: flex;
          /* 將內容以垂直方向排列 */
          flex-direction: column;
          // 彈性佈局間距
          gap: 20px;

          .title {
              height: auto;
              text-align: left;
              font-size: 35px;
              span{
                  font-weight: bold;
              }
          }
          .text {
              height: auto;
              text-align: left;
              display: flex;
              /* 將內容以垂直方向排列 */
              flex-direction: column;
              // 彈性佈局間距
              gap: 10px;
          }
      }

      .right{
          display: flex;
          align-items: center;

          a{
              width: 599px;
              height: 100px;
          }
      }





  }







}
</style>