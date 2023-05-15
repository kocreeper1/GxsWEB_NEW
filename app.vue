<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

const locale = useState<string>('locale.setting')
const app = useAppConfig() as AppConfigInput

useSeoMeta({
  title: 'Gxs台灣模組伺服器',
  titleTemplate: '%s - Gxs台灣模組伺服器',
})
</script>

<template>
  <Html :lang="locale">
    <Body class="antialiased duration-300 transition-colors text-white">
      <Navbar class="lg:justify-between" />
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
<style src="~/assets/sass/_variables.scss"></style>
