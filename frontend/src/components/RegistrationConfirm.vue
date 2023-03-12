<template>
  <Transition name="fade">
    <div v-if="show">
      <CustomBtn type="secondary-icon" text="" :enterPress="false" class="auth-back-btn" @clickEvent="back">
        <span></span>
      </CustomBtn>
      <div class="position-absolute position-center-center registration-confirm-form__container">
        <h1 class="main-title">Регистрация</h1>
        <p class="registration-confirm-form__subtitle">Чтобы подтвердить свою учётную запись, введите код, который был отправлен на вашу электронную почту.</p>
        <TextInput :label="'Код подтверждения'" :type="'text'"/>
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
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import TextInput from '@/components/UI/TextInput.vue'
import CustomBtn from '@/components/UI/CustomBtn.vue'
import {useFadeAppear} from "@/hooks";
import {useRouter} from "vue-router";
import {ROUTE_REGISTRATION_PATH} from "@/router/vars";

const show = useFadeAppear();

const router = useRouter();

const back = () => {
  router.push({
    path: ROUTE_REGISTRATION_PATH
  })
}

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
