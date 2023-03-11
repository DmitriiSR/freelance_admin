<template>
  <Transition name="fade">
    <div class="position-absolute position-center-center registration-form__container" v-if="show">
      <h1 class="main-title">Регистрация</h1>
      <div class="registration-form">
        <TextInput :label="'Имя'" :type="'text'" class="registration-form__item"/>
        <TextInput :label="'Email'" :type="'email'" class="registration-form__item"/>
        <TextInput :label="'Пароль'" :type="'password'" class="registration-form__item"/>
        <TextInput :label="'Повторите пароль'" :type="'password'" class="registration-form__item"/>
      </div>
      <CustomBtn type="primary" text="Зарегистрироваться" class="form-btn" :enterPress="true" @clickEvent="register"/>
      <div class="divider">или</div>
      <span>
        У вас уже есть аккаунт?
        <router-link to="/login">
          Войти
        </router-link>
      </span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {ref} from "vue";
import TextInput from '@/components/UI/TextInput.vue'
import CustomBtn from '@/components/UI/CustomBtn.vue'
import {useRouter} from "vue-router";

const show = ref(false);
setTimeout(() => show.value = true, 10);

const router = useRouter();

const register = () => {
  router.push({
    path: '/registration/confirm'
  })
}
</script>

<style scoped lang="scss">
.registration-form {
  display: flex;
  flex-wrap: wrap;
  padding-top: 35px;

  &__item {
    width: 230px;
  }

  &__item:nth-child(odd) {
    margin-right: 20px;
  }

  &__item:nth-child(n+3) {
    margin-top: 25px;
  }

  &__container {
    width: 480px;
  }
}

.form-btn {
  margin: 25px auto 0;
}

.divider {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #B4DADB;
  margin: 60px 0 25px;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #B4DADB;
  }

  &::before { margin-right: 7px }
  &::after { margin-left: 7px }
}
</style>
