<script setup lang="ts">
import FieldSection from "@/components/FieldSection.vue";
</script>

<template>
  <div class="wrapper-field">
    <field-section />
    <field-section />
    <field-section />

    <field-section />
    <field-section />
    <field-section />

    <field-section />
    <field-section />
    <field-section />
  </div>
</template>

<style scoped lang="scss">
.wrapper-field {
  width: 360px;
  height: 360px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
