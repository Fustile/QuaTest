import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuthStore = defineStore('counter', {
  state: () => ({
    auth: localStorage.getItem('auth') ? true : false,
    adminEmail: 'admin@example.com',
    adminPass: '123456',
  }),

  actions: {
    login() {
      this.auth = true
      localStorage.setItem('auth', 'enabled')
    },
    logout() {
      this.auth = false
      localStorage.removeItem('auth')
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
