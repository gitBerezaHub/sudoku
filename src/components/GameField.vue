<script setup lang="js">
import FieldSection from "@/components/FieldSection.vue";
import { defineProps } from "vue";
const props = defineProps({
  matrix: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="wrapper-field">
    <field-section :section="props.matrix[0]" />
    <field-section :section="props.matrix[1]" />
    <field-section :section="props.matrix[2]" />

    <field-section :section="props.matrix[3]" />
    <field-section :section="props.matrix[4]" />
    <field-section :section="props.matrix[5]" />

    <field-section :section="props.matrix[6]" />
    <field-section :section="props.matrix[7]" />
    <field-section :section="props.matrix[8]" />
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
