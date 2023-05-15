<template>
<div class="flex flex-col min-h-screen w-full">
    <div class="flex flex-col flex-1 w-full">
      <div
        class="relative flex flex-col flex-1 w-full h-full mx-auto max-w-8xl"
      >
        <slot />
      </div>
    </div>
    <slot name="footer">
      <Footer />
    </slot>
  </div>
</template>