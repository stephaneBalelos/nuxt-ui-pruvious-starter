<template>
  <footer
    class="backdrop-blur border-t border-gray-200 dark:border-gray-800 py-6"
  >
    <UContainer class="flex flex-col lg:flex-row gap-6 justify-between">
      <div class="flex flex-col">
        <div class="mb-2">Socials</div>
        <UButton
          icon="i-simple-icons-facebook"
          size="sm"
          color="primary"
          variant="link"
          label="Facebook"
          :trailing="true"
        />
        <UButton
          icon="i-simple-icons-instagram"
          size="sm"
          color="primary"
          variant="link"
          label="Facebook"
          :trailing="true"
        />
        <UButton
          icon="i-simple-icons-linkedin"
          size="sm"
          color="primary"
          variant="link"
          label="Facebook"
          :trailing="true"
        />
      </div>
      <div class="flex flex-col">
        <div class="mb-2">External</div>
        <UButton
          icon="i-heroicons-arrow-up-right-16-solid"
          size="sm"
          color="primary"
          variant="link"
          label="External Link to this"
          :trailing="true"
        />
        <UButton
          icon="i-heroicons-arrow-up-right-16-solid"
          size="sm"
          color="primary"
          variant="link"
          label="External Service"
          :trailing="true"
        />
      </div>
      <div class="flex flex-col">
        <div class="mb-2">Legal</div>
        <UButton
          size="sm"
          color="primary"
          variant="link"
          label="Privacy Policy"
          :trailing="true"
        />
        <UButton
          size="sm"
          color="primary"
          variant="link"
          label="Impressum"
          :trailing="true"
        />
        <UButton
          size="sm"
          color="primary"
          variant="link"
          label="Terms & Conditions"
          :trailing="true"
        />
        <UButton
          icon="i-heroicons-cog"
          size="sm"
          color="primary"
          variant="link"
          label="Cookies"
          :trailing="true"
        />
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
