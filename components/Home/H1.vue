<template>
  <section class="s1 aa" id="s1">
      <div class="content">

          <div class="">
              <img src="@/assets/img/logo.png" alt="這是圖片的說明文字" width="300" height="300">
          </div>
          <div class="">
              <span>GxsServer2.0</span>
              <span>台灣模組伺服器</span>
              <span>Taiwan Mod Server</span>
              <a href="https://discord.gg/JFvvSj7RsQ" target="_blank"></a>
          </div>
      </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.s1 {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('@/assets/img/home1.png') no-repeat;
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
      width: 70%;
      // 設定成彈性佈局
      display: flex;


      img {
          width: 350px;
          height: auto;
      }

      div {
          width: 50%;
          display: flex;
          flex-direction: column;
          //置中
          justify-content: center;
          align-items: center;
          gap: 5%;

          a {
              width: 200px;
              height: 64px;
              background: url('@/assets/img/discord.png') no-repeat;
              background-size: cover;
              transition: all .3s ease-in-out;

              &:hover {
                  transform: scale(1.1);
                  background: url('@/assets/img/discord_hover.png') no-repeat;
                  background-size: cover;
              }

              img {
                  width: 100%;
                  height: 100%;
              }
          }




          span:nth-child(1) {
              font-size: 10vmin;
          }

          span:nth-child(2) {
              font-size: 20px;
              // font-weight: bold;
          }
          span:nth-child(3) {
              font-size: 20px;
              // font-weight: bold;
          }
      }


  }
}
</style>


<!-- &:hover {
  transform: scale(1.1);
  background: url('~/assets/img/discord_hover.png') no-repeat;
  background-size: cover; -->
