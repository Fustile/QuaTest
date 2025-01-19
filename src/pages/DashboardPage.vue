<template>
  <q-page class="q-pa-md">
    <q-banner class="q-mb-md" dense> Добро пожаловать в систему! </q-banner>
    <q-btn label="Перейти к отчетам" color="primary" @click="goToReport" />
  </q-page>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToReport = async () => {
  await router.push('/report')
}
</script>
