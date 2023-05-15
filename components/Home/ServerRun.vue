<template>
  <main>
    <!-- <HeadTitle title="伺服器穩定運行" :style="3" class="text-3xl mb-6" /> -->
    <article>
      <div class="text">
        <span>❖ 本伺服器會隨著發展進度而結束 本季為2023第二季</span>
        <span>❖ 營運時間:24H(每周五17:00重啟)</span>
        <span>❖ 審核管道: 請至 Discord #白名單申請教學</span>
      </div>
      <a href="https://www.mc-list.xyz/292/info" target="_blank">
        <img src="https://image.mc-list.xyz/banner/1-292.png" alt="" />
      </a>
    </article>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
main {
  height: 30vh;
  display: flex;
  flex-direction: column;
  color: var(--gxs-dark);
  // 設定在尾
  justify-content: center;
  align-items: center;

  gap: 20px;

  article {
    display: flex;
    gap: 20px;
    .text {
      height: auto;
      text-align: left;

      display: flex;
      /* 將內容以垂直方向排列 */
      flex-direction: column;
      // 彈性佈局間距
      gap: 20px;
      h1 {
        text-align: left;
        font-size: 4vmin;
        font-weight: 700;
      }
      img {
        border: none;
        width: 500px;
        height: 80px;
      }
    }
  }
}
</style>
