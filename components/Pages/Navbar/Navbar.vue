<script lang="ts" setup>
export interface IMenuItem {
  type: 'link' | 'menu'
  text?: string
  href?: any
  route?: any
  menu?: IMenuItem[]
}

const menus = computed((): IMenuItem[] => [
  { type: 'link', text: '主頁', route: { path: '/' } },
  {
    type: 'menu',
    text: '規則與遊玩教學',
    menu: [
      { type: 'link', text: '規則', route: { path: '/Info/rule' } },
      { type: 'link', text: '遊玩教學', route: { path: '/Info/teach' } },
    ],
  },
  {
    type: 'menu',
    text: '團隊',
    menu: [
      { type: 'link', text: '關於Gxs', route: { path: '/About/TeamP1' } },
      { type: 'link', text: '團隊人員', route: { path: '/About/TeamP2' } },
    ],
  },
  {
    type: 'menu',
    text: '贊助',
    menu: [
      { type: 'link', text: '經費用途', route: { path: '/Donate/DonateP1' } },
      { type: 'link', text: '贊助流程', route: { path: '/Donate/DonateP2' } },
      { type: 'link', text: '贊助等級表、名單', route: { path: '/Donate/DonateP3' } },
    ],
  },
  {
    type: 'menu',
    text: '【Gxs2.0】遊玩圖',
    menu: [
      { type: 'link', text: '【Gxs】第七季', route: { path: '/' } },
      { type: 'link', text: '【Gxs】第八季', route: { path: '/' } },
    ],
  },
])
</script>

<template>
  <BuilderNavbar>
    <template #menu>
      <div
        class="relative ml-4 box-border hidden w-full items-center justify-end lg:flex"
      >
        <nav
          class="relative text-sm font-semibold leading-6 text-white"
          role="navigation"
        >
          <ul class="flex h-full items-center">
            <li v-for="(item, i) in menus" :key="i" class="group relative mx-2">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="nav capitalize"
                :text="item.text"
              />
              <MenuDropDown
                v-else-if="item.type === 'menu'"
                :text="item.text"
                class="font-extrabold capitalize"
                :menu="item.menu"
              />
            </li>
          </ul>
        </nav>
        <div class="flex space-x-4 border-l border-gray-900/10 px-2">
          <a
            href="https://discord.gg/JFvvSj7RsQ"
            class="dc_btn"
            target="_blank"
          ></a>
        </div>
      </div>
    </template>

    <template #icon>
      <div class="relative lg:flex pl-4 gap-7 text-gxs-primary hidden">
        <!-- <Anchor to="/" class="py-2">
            <svg-icon name="favorite" :animation="true"></svg-icon>
          </Anchor> -->
      </div>
    </template>
    <template #drawer="{ toggleDrawer }">
      <div class="mt-[50px]">
        <nav class="font-semibold leading-6">
          <ul class="flex flex-col">
            <li
              v-for="(item, i) in menus"
              :key="i"
              class="flex w-full"
              :class="{
                'mb-2 border-b border-gxs-primary pb-2': item.type === 'link',
              }"
            >
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="flex-1 capitalize hover:no-underline"
                :text="item.text"
                @click="toggleDrawer()"
              />
              <MenuDropDown
                v-else-if="item.type === 'menu'"
                :text="item.text"
                class="font-extrabold capitalize"
                :menu="item.menu"
                type="select-box"
                @click="toggleDrawer()"
              />
            </li>
          </ul>
        </nav>
      </div>
    </template>
  </BuilderNavbar>
</template>
<style scoped lang="scss">
.dc_btn {
  width: 40px;
  height: 40px;
  background: url('~/assets/img/dc_btn.png') no-repeat;
  background-size: cover;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background: url('~/assets/img/dc_btn_hover.png') no-repeat;
    background-size: cover;
  }
}
</style>
