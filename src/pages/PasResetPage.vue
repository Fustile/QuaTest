<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Сброс пароля</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="email" label="Email" type="email" outlined dense />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Сбросить" color="primary" @click="resetPassword" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref<string>('')

function validateEmail(emailRaw: string) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(emailRaw)
}

const resetPassword = async (): Promise<void> => {
  if (validateEmail(email.value)) {
    alert('Инструкция по сбросу пароля отправлена на email')
    await router.push({ name: 'loginMain' })
  } else {
    alert('Некорректный email')
  }
}
</script>
