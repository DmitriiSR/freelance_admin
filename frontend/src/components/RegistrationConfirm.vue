<template>
  <Transition name="fade">
    <div class="position-absolute position-center-center registration-confirm-form__container" v-if="show">
      <h1 class="main-title">Регистрация</h1>
      <p class="registration-confirm-form__subtitle">Чтобы подтвердить свою учётную запись, введите код, который был отправлен на вашу электронную почту.</p>
      <TextInput :label="'Имя'" :type="'text'"/>
      <CustomBtn type="primary" text="Зарегистрироваться" :enterPress="true" class="mx-auto mt-5"/>
      <div class="divider"></div>
      <span class="d-block">Не пришёл код?</span>
      <span>
        <router-link to="#">
          Нажмите здесь
        </router-link>,
        чтобы повторно отправить код
      </span>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import TextInput from '@/components/UI/TextInput.vue'
import CustomBtn from '@/components/UI/CustomBtn.vue'
import {ref} from "vue";

const show = ref(false);
setTimeout(() => show.value = true, 10);

</script>

<style scoped lang="scss">
.registration-confirm-form {

  &__container {
    width: 360px;
  }

  &__subtitle {
    padding: 15px 0 27px;
  }
}

.divider {
  height: 1px;
  background-color: #B4DADB;
  margin: 80px 0 25px;
}
</style>
