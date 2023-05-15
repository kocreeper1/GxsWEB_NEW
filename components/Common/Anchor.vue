<script lang="ts" setup>
// micro compiler
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: '',
  },
  duration: {
    type: Boolean,
    default: true,
  },
  hover: {
    type: Boolean,
    default: false,
  },
})

// state
const href = toRef(props, 'href')
const to = toRef(props, 'to')
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="transition-colors cursor-pointer outline-none"
    :class="{ 'duration-300': duration, 'hover:text-gxs-primary': hover }"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else-if="href"
    class="transition-colors cursor-pointer outline-none"
    :class="{ 'duration-300': duration, 'hover:text-gxs-primary': hover }"
    :href="(href as string)"
    target="_blank"
  >
    <slot>{{ text }}</slot>
  </a>
</template>
