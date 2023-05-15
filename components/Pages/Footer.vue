<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput

const footerLists = useState('footer.lists', () => [
  {
    title: '常見問題',
    icon: 'question',
    link: '/',
  },
  {
    title: '退換貨說明',
    icon: 'product',
    link: '/',
  },
  {
    title: '聯絡我們',
    icon: 'service',
    link: '/',
  },
  {
    title: '使用條款',
    icon: 'security',
    link: '/',
  },
  {
    title: '隱私權條款',
    icon: 'lock',
    link: '/',
  },
])
</script>

<template>
  <footer
    class="border-t lg:border-gray-900/10 border-gray-50/[0.2] text-gxs-white-50 bg-gxs-bg"
  >
    <section
      class="flex flex-1 flex-col w-full lg:w-[80%] px-4 mx-auto space-x-20 max-w-8xl lg:px-8 pb-6 my-4"
    >
      <div
        class="flex flex-col justify-between w-full pt-2 text-center md:flex-row"
      >
        <div class="flex flex-row items-center justify-center gap-8">
          <svg-icon name="logo" class="w-[110px] h-[110px]"></svg-icon>
          <article class="flex flex-col gap-1">
            <div class="flex flex-col items-start">
              <h1>關於我們</h1>
              <span class="text-sm"
                >2014成立的小團隊，於2021正式營運，台灣模組伺服器</span
              >
            </div>
            <div class="flex flex-col items-start">
              <h1>聯絡我們</h1>
              <span class="text-sm">Discord：#阿倫1293</span>
              <span class="text-sm"
                >Gmail：<a href="mailto:gxsserver@gmail.com"
                  >gxsserver@gmail.com</a
                ></span
              >
            </div>
          </article>
        </div>
      </div>
    </section>
    <div class="w-full text-center my-2 text-xs">
      © Copyright 2021 Gxs Server. All rights reserved.
    </div>
  </footer>
</template>
