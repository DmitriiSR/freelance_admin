<template>
  <Transition name="fade">
    <div class="position-absolute position-center-center login-form" v-if="show">
      <h1 class="main-title">Вход в личный кабинет</h1>
      <form autocomplete="on">
        <TextInput :label="'Email'" :type="'email'" class="login-email" @inputText="input"/>
        <TextInput :label="'Пароль'" :type="'password'" class="login-password"/>
      </form>
      <CustomBtn type="primary" text="Войти" class="form-btn" :enterPress="true" @clickEvent="logIn"/>
      <router-link :to="ROUTE_REGISTRATION_PATH" class="pt-3 mx-auto">
        Забыли логин и/или пароль?
      </router-link>
      <div class="divider">или</div>
      <span>
        У вас ещё нет аккаунта?
        <router-link to="/registration">
          Зарегистрироваться
        </router-link>
      </span>
    </div>
  </Transition>

</template>

<script setup lang="ts">
import TextInput from '@/components/UI/TextInput.vue'
import CustomBtn from '@/components/UI/CustomBtn.vue'
import {ROUTE_REGISTRATION_PATH} from "@/router/vars";
import {useFadeAppear} from "@/hooks";

const input = (val:string) => console.log(val);

const logIn = () => console.log('Юша самая любимая!')

const show = useFadeAppear()

</script>

<style scoped lang="scss">
.login-email {
  margin-top: 28px;
}
.login-password {
   margin-top: 17px;
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
  margin: 40px 0;

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

.login-form {
  width: 360px;
}
</style>
