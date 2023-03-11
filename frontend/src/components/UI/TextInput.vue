<template>
  <label class="custom-input" :class="{focus: focus, 'width-value': val}">
    <input
        :type="type"
        @focus="click"
        @blur="blur"
        v-model="val"
        @input="input"
        :autocomplete="type === 'password'"
    >
    <span>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import {defineProps, ref, defineEmits} from "vue";

defineProps<{
  label:string
  type:string
}>();

const emit = defineEmits<{
  (e: "inputText", val: string): string
}>();

const focus = ref(false);
const val = ref('');

const blur = () => {
  focus.value = false;
}
const click = () => focus.value = true;
const input = (e:Event) => emit('inputText', (e.target as HTMLInputElement).value)

</script>

<style lang="scss">
.custom-input {
  margin-top: 8px;
  position: relative;
  display: block;
  height: 44px;
  width: 100%;
  padding: 14px;
  border: 1px solid #476C76;
  border-radius: 5px;
  cursor: text;

  input {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    color: #476C76;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    background-color: #ffffff;
  }

  span {
    position: absolute;
    top: 14px;
    left: 14px;
    padding: 0 4px;
    background-color: #ffffff;
    color: #476C76;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    transition: ease all 0.12s;
  }

  &.width-value {
    border-color: #476C76;
    span {
      left: 0;
      top: -8px;
    }
  }

  &.focus {
    border-color: #3BCAE4;

    span {
      left: 0;
      top: -8px;
      color: #3BCAE4;
    }
  }



}
</style>
