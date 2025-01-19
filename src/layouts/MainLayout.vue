<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>


        <q-toolbar-title> Forms Check </q-toolbar-title>

        <q-btn v-if="authStore.auth" @click="logout()">
          Выход
        </q-btn>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {useAuthStore} from 'stores/authStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

async function logout() {
        authStore.logout()
        await router.push({name: 'loginMain' })
}

</script>
