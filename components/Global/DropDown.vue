<template>
  <div class="flex items-center group">
    <div
      v-if="currentStyle === 'dropdown'"
      class="dropdown relative inline-block group"
    >
      <slot name="title">
        <button class="inline-flex items-center rounded py-2">
          <Anchor v-if="to" :to="to">
            <svg-icon :name="icon" class="group-hover:animate-move" />
          </Anchor>
          <span
            v-else
            class="flex items-center justify-center group-hover:text-gxs-primary duration-300"
          >
            <svg-icon :name="icon" class="group-hover:animate-move" />
          </span>
        </button>
      </slot>
      <div
        class="group-hover:scale-y-100 absolute scale-y-0 origin-top-right pt-5 duration-300"
      >
        <div class="shadow-lg flex flex-col gap-1 w-full bg-gxs-bg">
          <slot name="dropdown"></slot>
        </div>
      </div>
    </div>
    <slot name="select" v-if="currentStyle === 'select'"></slot>
  </div>
</template>

<script setup lang="ts">
// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown',
  },
  animation: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: 'home',
  },
  to: {
    type: String,
  },
})

// state
const currentStyle = toRef(props, 'type')
</script>
