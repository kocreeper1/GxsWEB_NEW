<template>
  <main class="relative center h-[80vh] w-full">
    <article class="content">
      <h1>GxsServer2.0</h1>
      <h3>台灣模組伺服器</h3>
      <span>Taiwan Mod Server</span>
      <a href="https://discord.gg/JFvvSj7RsQ" target="_blank"></a>
    </article>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
main {
  background: url('~/assets/img/home1.png') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    h1 {
      font-size: 64px;
      font-weight: 900;
      color: var(--gxs-primary);
    }
    h3 {
      font-size: 32px;
    }
    span {
      font-size: 24px;
    }
    a {
      width: 200px;
      height: 64px;
      display: inline-block;
      background: url('~/assets/img/discord.png') no-repeat;
      background-size: cover;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
        background: url('~/assets/img/discord_hover.png') no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
