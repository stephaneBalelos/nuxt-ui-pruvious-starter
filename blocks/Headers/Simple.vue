<template>
    <div class="relative">
      <UContainer>
          <div :class="`flex flex-col justify-start prose prose-headings:mb-2 md:prose-lg lg:prose-xl max-w-none py-8 ${alignment}`">
              <small v-if="subtitle">{{ subtitle }}</small>
              <h1>{{ title }}</h1>
              <p v-if="description">{{ description }}</p>
              <UButton v-if="cta" :to="cta" color="primary" variant="solid" size="sm">{{ ctaLabel }}</UButton>
          </div>
      </UContainer>
    </div>
</template>

<script setup lang="ts">
import { defineBlock, imageField, linkField, selectField, textAreaField, textField } from "~/.pruvious";

defineBlock({
  label: "Simple Header",
  description: "Simple header block",
  icon: "Wallpaper",
});

defineProps({
  subtitle: textField({
    autocomplete: "off",
    placeholder: "Enter a subtitle",
    label: "Subtitle",
    description: "The subtitle of the header",
    trim: true,
  }),
  title: textField({
    autocomplete: "off",
    placeholder: "Enter a title",
    label: "Title",
    description: "The title of the header",
    trim: true,
  }),
  description: textAreaField({
    label: "Description",
    placeholder: "Enter a description",
    description: "The description of the header",
    spellcheck: true,
  }),
  ctaLabel: textField({
    label: "Call to action label",
    description: "The label of the call to action",
    placeholder: "Enter a call to action label",
    default: "Call to action",
  }),
  cta: linkField({
    label: "Call to action",
    description: "The call to action of the header",
    placeholder: "Enter a call to action",
  }),
  alignment: selectField({
    label: "Alignment",
    description: "The alignment of the header",
    choices: {
        "items-start": "Left",
        "items-center": "Center",
        "items-end": "Right",
    },
    default: "items-start",
  }),
});
</script>

<style scoped></style>
