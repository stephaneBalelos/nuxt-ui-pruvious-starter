<template>
  <header
    class="backdrop-blur border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 pt-4 pt-2 pb-2 lg:pb-0"
  >
    <UContainer class="flex items-center justify-between">
      <div class="flex flex-1 items-center gap-1.5">
        <NuxtLink
          :to="'/'"
          :aria-label="'label'"
          class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5"
        >
          Logo
        </NuxtLink>
      </div>
      <div class="flex-1 hidden lg:flex">
        <UHorizontalNavigation :links="links" class="justify-center" />
      </div>
      <div class="flex items-right gap-1.5 ms-4">
        <UButton size="sm" color="primary" square variant="solid"
          >Call to action</UButton
        >
      </div>
      <div class="lg:hidden ms-2">
        <UButton
          icon="i-heroicons-bars-2-solid"
          size="sm"
          color="primary"
          square
          variant="solid"
          @click="isOpen = !isOpen"
        />
      </div>
    </UContainer>

    <USlideover v-model="isOpen">
      <div class="p-4 flex-1">
        <UButton
          color="gray"
          variant="ghost"
          size="sm"
          icon="i-heroicons-x-mark-20-solid"
          class="flex lg:hidden ml-auto end-5 top-5 z-10"
          square
          padded
          @click="isOpen = false"
        />
        <UVerticalNavigation class="py-4" :links="links" />
      </div>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false);

const links = [
  {
    label: "Home",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
    to: "/",
    badge: 100,
  },
  {
    label: "Services",
    icon: "i-heroicons-home",
    to: "/getting-started/installation",
  },
  {
    label: "About us",
    icon: "i-heroicons-chart-bar",
    to: "/components/horizontal-navigation",
  },
  {
    label: "News",
    icon: "i-heroicons-command-line",
    to: "/components/command-palette",
  },
  {
    label: "Contact",
    icon: "i-heroicons-command-line",
    to: "/components/command-palette",
  },
];


onMounted(() => {
  // Close Mobile Nav when resizing the Viewport
    window.addEventListener('resize', () => {
      isOpen.value = false
    })
})

</script>

<style scoped></style>
