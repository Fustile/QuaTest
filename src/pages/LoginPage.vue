<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Вход в систему</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="email" label="Email" type="email" outlined dense />
        <q-input v-model="password" label="Пароль" type="password" outlined dense class="q-mt-md" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Войти" color="primary" @click="login" />
      </q-card-actions>
      <q-card-section>
        <q-btn flat label="Забыли пароль?" color="primary" @click="goToResetPassword" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useAuthStore } from 'stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')

async function login() {
  if (email.value && password.value) {
    if (email.value === authStore.adminEmail && password.value === authStore.adminPass) {
      authStore.login()
      await router.push({ name: 'dashboardMain' })
    } else {
      alert('Неверные данные')
    }
  } else {
    alert('Заполните все поля')
  }
}

async function goToResetPassword() {
  await router.push({ name: 'pasResetMain' })
}
</script>
