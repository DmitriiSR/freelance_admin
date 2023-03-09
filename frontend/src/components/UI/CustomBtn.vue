<template>
  <button :class="props.className ?? ''" @click="testF">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps<{
  className: string
}>()

const testF = ():void => {
  console.log(props);
}

</script>

<style scoped lang="scss">

</style>
