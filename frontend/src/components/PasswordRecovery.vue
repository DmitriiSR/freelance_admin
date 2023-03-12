<template>
  <Transition name="fade">
    <div v-if="show">
      <CustomBtn type="secondary-icon" text="" :enterPress="false" class="auth-back-btn" @clickEvent="back">
        <span></span>
      </CustomBtn>
      <div class="position-absolute position-center-center recovery-form">
        <h1 class="main-title">Восстановление пароля</h1>
        <p class="recovery-form__subtitle">Чтобы подтвердить свою учётную запись, введите код, который был отправлен на вашу электронную почту.</p>
        <TextInput :label="'Email'" :type="'email'" class="login-email"/>
        <CustomBtn type="primary" text="Продолжить" class="mt-6 mx-auto" :enterPress="true" @clickEvent="confirmCode"/>
      </div>
    </div>

  </Transition>
</template>

<script setup lang="ts">
import {useFadeAppear} from "@/hooks";
import TextInput from '@/components/UI/TextInput.vue'
import CustomBtn from '@/components/UI/CustomBtn.vue'
import {useRouter} from "vue-router";
import {ROUTE_PASSWORD_RECOVERY_CODE_PATH, ROUTE_LOGIN_PATH} from "@/router/vars";

const show = useFadeAppear();

const router = useRouter();

const confirmCode = () => {
  router.push({
    path: ROUTE_PASSWORD_RECOVERY_CODE_PATH
  })
}

const back = () => {
  router.push({
    path: ROUTE_LOGIN_PATH
  })
}
</script>

<style scoped lang="scss">
.recovery-form {
  width: 360px;

  &__subtitle {
    padding: 15px 0 35px;
  }
}
</style>
